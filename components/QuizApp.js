'use client';

import {useEffect, useMemo, useState} from 'react';

const DIFFICULTY_POINTS = {
  easy: 1,
  med: 2,
  hard: 3
};

const PROGRESS_STORAGE_KEY = 'comp2151-progress-v2';
const THEME_STORAGE_KEY = 'comp2151-theme';

function getAllCategory(lecture) {
  const total = lecture?.questions?.length || 0;
  return {key: 'all', label: `All ${total}`, cls: 'c0'};
}

function getQuestionPool(lecture, categoryKey) {
  if (!lecture) return [];

  const enrichedQuestions = lecture.questions.map((question, index) => ({
    ...question,
    sourceKey: `${lecture.id}:${index}`
  }));

  if (categoryKey === 'all') return enrichedQuestions;

  return enrichedQuestions.filter(question => question.cat === categoryKey);
}

function createCategoryScores(lecture) {
  if (!lecture) return {};

  return (lecture.categories || [])
    .filter(category => category.key !== 'all')
    .reduce((scores, category) => {
      scores[category.key] = {correct: 0, total: 0};
      return scores;
    }, {});
}

function shuffleOptions(question) {
  const shuffled = question.opts.map((text, index) => ({text, index}));

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return {
    opts: shuffled.map(option => option.text),
    ans: shuffled.findIndex(option => option.index === question.ans)
  };
}

function getDifficultyClass(difficulty) {
  if (difficulty === 'easy') return 'diff-easy';
  if (difficulty === 'med') return 'diff-med';
  return 'diff-hard';
}

function getDifficultyLabel(difficulty) {
  if (difficulty === 'easy') return 'Easy';
  if (difficulty === 'med') return 'Medium';
  return 'Hard';
}

function getResultsGrade(percentage) {
  if (percentage === 100) return 'Perfect score!';
  if (percentage >= 85) return 'Excellent!';
  if (percentage >= 70) return 'Great work!';
  if (percentage >= 55) return 'Good effort!';
  return 'Keep going!';
}

function getCategoryBarColor(percentage) {
  if (percentage >= 70) return 'var(--good)';
  if (percentage >= 45) return 'var(--warn)';
  return 'var(--bad)';
}

function getLectureProgress(progressStore, lecture) {
  const lectureState = progressStore[lecture.id] || {};
  const attempts = Object.keys(lectureState).length;
  const mastered = Object.values(lectureState).filter(entry => entry?.correct).length;
  const total = lecture.questions.length;

  return {
    attempts,
    mastered,
    total,
    percentage: total > 0 ? Math.round((mastered / total) * 100) : 0
  };
}

function getCourseProgress(lectures, progressStore) {
  return lectures.reduce((summary, lecture) => {
    const lectureProgress = getLectureProgress(progressStore, lecture);

    return {
      total: summary.total + lectureProgress.total,
      attempts: summary.attempts + lectureProgress.attempts,
      mastered: summary.mastered + lectureProgress.mastered
    };
  }, {total: 0, attempts: 0, mastered: 0});
}

export default function QuizApp() {
  const [lectures, setLectures] = useState([]);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentLectureId, setCurrentLectureId] = useState(null);
  const [currentCategoryKey, setCurrentCategoryKey] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [categoryScores, setCategoryScores] = useState({});
  const [lectureProgress, setLectureProgress] = useState({});
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let ignore = false;

    async function loadLectures() {
      try {
        setStatus('loading');
        const response = await fetch('/api/lectures', {cache: 'no-store'});

        if (!response.ok) {
          throw new Error(`Failed to load lectures (${response.status})`);
        }

        const payload = await response.json();

        if (!ignore) {
          setLectures(payload);
          setStatus('ready');
        }
      } catch (error) {
        if (!ignore) {
          setErrorMessage(error.message || 'Unable to load lecture data.');
          setStatus('error');
        }
      }
    }

    loadLectures();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    try {
      const savedProgress = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
      const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

      if (savedProgress) {
        setLectureProgress(JSON.parse(savedProgress));
      }

      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme);
      }
    } catch {
      setLectureProgress({});
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(lectureProgress));
  }, [lectureProgress]);

  const currentLecture = useMemo(
    () => lectures.find(lecture => lecture.id === currentLectureId) || null,
    [currentLectureId, lectures]
  );

  const categories = useMemo(
    () => (currentLecture?.categories || []).filter(category => category.key !== 'all'),
    [currentLecture]
  );

  const categoryCounts = useMemo(() => {
    if (!currentLecture) return {};

    return categories.reduce((counts, category) => {
      counts[category.key] = currentLecture.questions.filter(question => question.cat === category.key).length;
      return counts;
    }, {});
  }, [categories, currentLecture]);

  const courseProgress = useMemo(() => getCourseProgress(lectures, lectureProgress), [lectureProgress, lectures]);
  const courseProgressPercentage = courseProgress.total > 0
    ? Math.round((courseProgress.mastered / courseProgress.total) * 100)
    : 0;

  const currentQuestion = questionIndex < questions.length ? questions[questionIndex] : null;
  const currentCategory = getAllCategory(currentLecture);
  const answeredCount = correctCount + wrongCount;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const remainingQuestions = Math.max(0, questions.length - answeredCount);
  const progressWidth = questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;
  const isLectureSelectView = !currentLecture;
  const isResultsView = Boolean(currentLecture && questions.length > 0 && questionIndex >= questions.length);
  const isEmptyLecture = Boolean(currentLecture && currentLecture.questions.length === 0);
  const currentQuestionCategory = categories.find(category => category.key === currentQuestion?.cat);

  function resetQuiz(nextLecture, nextCategoryKey) {
    setQuestions(getQuestionPool(nextLecture, nextCategoryKey));
    setQuestionIndex(0);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setSelectedChoice(null);
    setCategoryScores(createCategoryScores(nextLecture));
  }

  function handleLectureSelect(lectureId) {
    const lecture = lectures.find(entry => entry.id === lectureId);
    if (!lecture) return;

    setCurrentLectureId(lecture.id);
    setCurrentCategoryKey('all');
    resetQuiz(lecture, 'all');
  }

  function handleBackToLectures() {
    setCurrentLectureId(null);
    setCurrentCategoryKey('all');
    setQuestions([]);
    setQuestionIndex(0);
    setSelectedChoice(null);
  }

  function handleCategorySelect(categoryKey) {
    if (!currentLecture) return;

    setCurrentCategoryKey(categoryKey);
    resetQuiz(currentLecture, categoryKey);
  }

  function trackLectureProgress(answeredCorrectly) {
    if (!currentLecture || !currentQuestion?.sourceKey) return;

    setLectureProgress(existingProgress => {
      const lectureState = existingProgress[currentLecture.id] || {};
      const previousEntry = lectureState[currentQuestion.sourceKey];

      return {
        ...existingProgress,
        [currentLecture.id]: {
          ...lectureState,
          [currentQuestion.sourceKey]: {
            correct: answeredCorrectly || previousEntry?.correct || false
          }
        }
      };
    });
  }

  function handleAnswer(choiceIndex) {
    if (!currentQuestion || selectedChoice !== null) return;

    const answeredCorrectly = choiceIndex === currentQuestion.ans;
    setSelectedChoice(choiceIndex);
    trackLectureProgress(answeredCorrectly);

    if (answeredCorrectly) {
      setCorrectCount(count => count + 1);
      setScore(total => total + (DIFFICULTY_POINTS[currentQuestion.diff] || 0));
    } else {
      setWrongCount(count => count + 1);
    }

    if (currentQuestion.cat) {
      setCategoryScores(existingScores => {
        const currentScore = existingScores[currentQuestion.cat];
        if (!currentScore) return existingScores;

        return {
          ...existingScores,
          [currentQuestion.cat]: {
            correct: currentScore.correct + (answeredCorrectly ? 1 : 0),
            total: currentScore.total + 1
          }
        };
      });
    }
  }

  function handleNextQuestion() {
    setQuestionIndex(index => index + 1);
    setSelectedChoice(null);
  }

  return (
    <main className="app-shell">
      <button
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="theme-fab"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        type="button"
      >
        {theme === 'dark' ? (
          <svg
            aria-hidden="true"
            className="theme-fab-icon"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="theme-fab-icon"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
          </svg>
        )}
      </button>

      <header className="hero-shell">
        <div>
          <div className="hero-kicker">Study workspace</div>
          <h1 className="hero-title">COMP2151 Exam Prep</h1>
          <p className="hero-sub">Practice by lecture and build toward a full review set.</p>
        </div>
      </header>

      {status === 'loading' && (
        <section className="status-card">
          <h2>Loading lectures</h2>
          <p>Preparing the question bank for the study session.</p>
        </section>
      )}

      {status === 'error' && (
        <section className="status-card">
          <h2>Could not load lectures</h2>
          <p>{errorMessage}</p>
        </section>
      )}

      {status === 'ready' && isLectureSelectView && (
        <section className="home-shell">
          <div className="mastery-card">
            <div className="mastery-stat">
              <div className="mastery-value">{courseProgressPercentage}<span>%</span></div>
              <div className="mastery-label">of the course mastered so far</div>
            </div>
            <div className="mastery-progress">
              <div className="row-kicker">
                <span>Course mastery</span>
                <span>{courseProgress.mastered} / {courseProgress.total} correct</span>
              </div>
              <div className="track-bar"><span style={{width: `${courseProgressPercentage}%`}} /></div>
            </div>
          </div>

          <div className="lecture-head-row">
            <div>
              <h2>Select a lecture</h2>
              <p className="section-copy">Pick up where you left off or start a fresh lecture run.</p>
            </div>
            <span className="section-meta">
              {lectures.filter(lecture => lecture.questions.length > 0).length} available · {lectures.filter(lecture => lecture.questions.length === 0).length} coming soon
            </span>
          </div>

          <div className="lecture-grid">
            {lectures.map(lecture => {
              const lectureSummary = getLectureProgress(lectureProgress, lecture);
              const isLocked = lecture.questions.length === 0;

              return (
                <button
                  key={lecture.id}
                  className={`lecture-card${isLocked ? ' locked' : ''}`}
                  disabled={isLocked}
                  onClick={() => handleLectureSelect(lecture.id)}
                  type="button"
                >
                  <div>
                    <div className="lecture-card-num">{lecture.title}</div>
                    <div className="lecture-card-title">{lecture.subtitle}</div>
                    <div className="lecture-card-meta">
                      {lecture.questions.length > 0
                        ? `${lecture.questions.length} questions · ${lectureSummary.attempts > 0 ? `${lectureSummary.attempts} attempted` : 'not started'}`
                        : 'Content coming soon'}
                    </div>
                  </div>

                  <div className="lecture-card-footer">
                    <span className="lecture-chip">
                      {lecture.questions.length > 0
                        ? `${lectureSummary.mastered} / ${lecture.questions.length} mastered`
                        : 'Locked'}
                    </span>
                    <div className="lecture-ring" style={{'--pct': `${lectureSummary.percentage}%`}}>
                      <span>{lecture.questions.length > 0 ? `${lectureSummary.percentage}%` : '—'}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {status === 'ready' && currentLecture && (
        <section className="session-shell">
          <button className="back-link" onClick={handleBackToLectures} type="button">
            ← Back to lectures
          </button>

          <div className="session-frame">
            <div className="session-topline">
              <div className="session-heading-block">
                <div className="hero-kicker">{currentLecture.title}</div>
                <h2 className="session-title">{currentLecture.subtitle}</h2>
              </div>
              <span className="lecture-pill">{currentLecture.questions.length} deep Q&amp;A questions</span>
            </div>

            <div className="session-layout">
              <aside className="session-sidebar">
                <div className="sidebar-card">
                  <div className="panel-title">Progress</div>
                  <div className="track-bar compact"><span style={{width: `${progressWidth}%`}} /></div>
                  <div className="progress-meta-row">
                    <span><strong>{answeredCount} / {questions.length || 0}</strong> answered</span>
                    <span><strong>{remainingQuestions}</strong> left</span>
                    <span><strong>{progressWidth}%</strong> complete</span>
                  </div>
                </div>

                <div className="sidebar-card">
                  <div className="panel-title">Filter by category</div>
                  <div className="cat-nav compact-row">
                    {[currentCategory, ...categories].map(category => (
                      <button
                        key={category.key}
                        className={`cat-btn ${category.cls}${currentCategoryKey === category.key ? ' active' : ''}`}
                        onClick={() => handleCategorySelect(category.key)}
                        type="button"
                      >
                        {category.label}
                        {category.key !== 'all' && <span className="cat-count">({categoryCounts[category.key] || 0})</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="session-main">
                {isEmptyLecture && (
                  <div className="results-card">
                    <div className="result-grade">{currentLecture.title} is ready for content.</div>
                    <p>{currentLecture.description}</p>
                    <p>Add questions in <code>{`data/${currentLecture.id}.json`}</code> to activate this lecture.</p>
                  </div>
                )}

                {!isEmptyLecture && !isResultsView && currentQuestion && (
                  <article className="question-card">
                    <div className="question-topline">
                      <span className="row-kicker">Q {questionIndex + 1} of {questions.length}</span>
                      <span className="accuracy-chip">{accuracy}% acc</span>
                    </div>

                    <div className="question-tags">
                      <span className="tag neutral">{currentQuestionCategory?.label || currentQuestion.cat}</span>
                      <span className={`tag ${getDifficultyClass(currentQuestion.diff)}`}>{getDifficultyLabel(currentQuestion.diff)}</span>
                    </div>

                    <h2 className="question-heading">{currentQuestion.q}</h2>

                    <div className="options-list">
                      {currentQuestion.opts.map((option, optionIndex) => {
                        const isCorrectOption = optionIndex === currentQuestion.ans;
                        const isWrongSelection = optionIndex === selectedChoice && selectedChoice !== currentQuestion.ans;
                        let className = 'option-btn';

                        if (selectedChoice !== null && isCorrectOption) {
                          className += selectedChoice === currentQuestion.ans ? ' correct' : ' reveal';
                        } else if (selectedChoice !== null && isWrongSelection) {
                          className += ' wrong';
                        }

                        return (
                          <button
                            key={`${currentQuestion.q}-${optionIndex}`}
                            className={className}
                            disabled={selectedChoice !== null}
                            onClick={() => handleAnswer(optionIndex)}
                            type="button"
                          >
                            <span className="option-key">{String.fromCharCode(65 + optionIndex)}</span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>

                    {selectedChoice !== null && (
                      <>
                        <div className={`explain-card ${selectedChoice === currentQuestion.ans ? 'ok' : 'bad'}`}>
                          <strong>{selectedChoice === currentQuestion.ans ? 'Explanation' : 'Review'}</strong>
                          <p>{currentQuestion.explain}</p>
                        </div>

                        <div className="deep-card">
                          <div className="row-kicker">Why this matters</div>
                          <p>{currentQuestion.deep}</p>
                        </div>
                      </>
                    )}

                    <div className="question-actions">
                      <span className="question-hint">Answer to reveal explanation</span>
                      {selectedChoice !== null && (
                        <button className="action-btn primary" onClick={handleNextQuestion} type="button">
                          {questionIndex < questions.length - 1 ? 'Next question' : 'See results'}
                        </button>
                      )}
                    </div>
                  </article>
                )}

                {isResultsView && (
                  <div className="results-card">
                    <div className="result-score">{correctCount}/{questions.length}</div>
                    <div className="result-grade">
                      {getResultsGrade(Math.round((correctCount / questions.length) * 100))}
                      {' · '}
                      {Math.round((correctCount / questions.length) * 100)}%
                      {' · '}
                      {score} / {questions.reduce((total, question) => total + (DIFFICULTY_POINTS[question.diff] || 0), 0)} pts
                    </div>

                    <div className="cat-breakdown">
                      {categories.map(category => {
                        const scoreBreakdown = categoryScores[category.key] || {correct: 0, total: 0};
                        const percentage = scoreBreakdown.total > 0
                          ? Math.round((scoreBreakdown.correct / scoreBreakdown.total) * 100)
                          : 0;

                        return (
                          <div className="cat-row" key={category.key}>
                            <span className="cat-row-label">{category.label}</span>
                            <div className="cat-bar-bg">
                              <div className="cat-bar-fill" style={{width: `${percentage}%`, background: getCategoryBarColor(percentage)}} />
                            </div>
                            <span className="cat-score-lbl">{scoreBreakdown.correct}/{scoreBreakdown.total} ({percentage}%)</span>
                          </div>
                        );
                      })}
                    </div>

                    <p>
                      {Math.round((correctCount / questions.length) * 100) >= 70
                        ? `Strong command of ${currentLecture.title}.`
                        : 'Focus on the lower-scoring categories above and retry those sections next.'}
                    </p>

                    <div className="results-actions">
                      <button className="action-btn primary" onClick={() => handleCategorySelect('all')} type="button">
                        Retry {getAllCategory(currentLecture).label.toLowerCase()}
                      </button>
                      {categories.map(category => (
                        <button className="action-btn" key={category.key} onClick={() => handleCategorySelect(category.key)} type="button">
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
