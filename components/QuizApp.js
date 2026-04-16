'use client';

import {useEffect, useMemo, useState} from 'react';

const DIFFICULTY_POINTS = {
  easy: 1,
  med: 2,
  hard: 3
};

function getAllCategory(lecture) {
  const total = lecture?.questions?.length || 0;
  return {key: 'all', label: `All ${total}`, cls: 'c0'};
}

function getQuestionPool(lecture, categoryKey) {
  if (!lecture) return [];
  if (categoryKey === 'all') return [...lecture.questions];
  return lecture.questions.filter(question => question.cat === categoryKey);
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
  if (percentage >= 70) return '#111';
  if (percentage >= 45) return '#BA7517';
  return '#E24B4A';
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

  function handleAnswer(choiceIndex) {
    if (!currentQuestion || selectedChoice !== null) return;

    const answeredCorrectly = choiceIndex === currentQuestion.ans;
    setSelectedChoice(choiceIndex);

    if (answeredCorrectly) {
      setCorrectCount(count => count + 1);
      setScore(total => total + (DIFFICULTY_POINTS[currentQuestion.diff] || 0));
    } else {
      setWrongCount(count => count + 1);
      setQuestions(existingQuestions => {
        const nextQuestions = [...existingQuestions];
        const retryQuestion = {
          ...currentQuestion,
          ...shuffleOptions(currentQuestion),
          retry: (currentQuestion.retry || 0) + 1
        };
        const firstPossibleIndex = questionIndex + 1;
        const lastPossibleIndex = nextQuestions.length;
        const insertAt = Math.floor(Math.random() * (lastPossibleIndex - firstPossibleIndex + 1)) + firstPossibleIndex;
        nextQuestions.splice(insertAt, 0, retryQuestion);
        return nextQuestions;
      });
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
    <main className="app">
      <header className="page-header">
        <div>
          <div className="eyebrow">Study workspace</div>
          <h1>COMP2151 Exam Prep</h1>
          <p className="sub">Practice by lecture, retry missed questions, and build toward a full exam review set.</p>
        </div>
      </header>

      {status === 'loading' && (
        <section className="status-card">
          <h2>Loading lectures</h2>
          <p>Preparing the question bank for the React app.</p>
        </section>
      )}

      {status === 'error' && (
        <section className="status-card">
          <h2>Could not load lectures</h2>
          <p>{errorMessage}</p>
        </section>
      )}

      {status === 'ready' && isLectureSelectView && (
        <section>
          <h2>Select Lecture</h2>
          <p className="sub">Choose a lecture to start a focused review session.</p>
          <div className="lecture-nav">
            {lectures.map(lecture => {
              const questionCount = lecture.questions.length;
              const statusLabel = questionCount > 0 ? `${questionCount} questions` : 'Coming soon';

              return (
                <button
                  key={lecture.id}
                  className={`lecture-btn${currentLectureId === lecture.id ? ' active' : ''}`}
                  onClick={() => handleLectureSelect(lecture.id)}
                  type="button"
                >
                  <span>{lecture.title}</span>
                  <span className="lecture-count">{statusLabel}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {status === 'ready' && currentLecture && (
        <section>
          <button className="back-btn" onClick={handleBackToLectures} type="button">
            ← Back to lectures
          </button>

          <div className="lecture-panel">
            <div className="lecture-head">
              <div>
                <h2>{`${currentLecture.title} - ${currentLecture.subtitle}`}</h2>
                <p className="sub">{currentLecture.description}</p>
              </div>
              <div className="lecture-summary-pill">{questions.length} total questions</div>
            </div>

            <div className="session-layout">
              <aside className="session-sidebar">
                <div className="panel-card session-stats-card">
                  <div className="panel-label">Session stats</div>
                  <div className="scoreboard">
                    <div className="sc"><div className="sc-num">{score}</div><div className="sc-lbl">Points</div></div>
                    <div className="sc"><div className="sc-num" style={{color: '#639922'}}>{correctCount}</div><div className="sc-lbl">Correct</div></div>
                    <div className="sc"><div className="sc-num" style={{color: '#E24B4A'}}>{wrongCount}</div><div className="sc-lbl">Wrong</div></div>
                    <div className="sc"><div className="sc-num">{accuracy}%</div><div className="sc-lbl">Accuracy</div></div>
                    <div className="sc"><div className="sc-num">{remainingQuestions}</div><div className="sc-lbl">Remaining</div></div>
                  </div>
                </div>

                <div className="panel-card progress-card">
                  <div className="panel-label">Progress</div>
                  <div className="pbar-wrap"><div className="pbar-fill" style={{width: `${progressWidth}%`}} /></div>
                  <div className="progress-meta">
                    <span className="progress-count">{answeredCount} / {questions.length || 0} answered</span>
                    <span>{progressWidth}% complete</span>
                  </div>
                </div>

                <div className="panel-card">
                  <div className="panel-label">Filter by category</div>
                  <div className="cat-nav compact">
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
                  <div className="results">
                    <div className="result-grade">{currentLecture.title} is ready for content.</div>
                    <p>{currentLecture.description}</p>
                    <p>Add questions to <code>{`data/${currentLecture.id}.js`}</code> using the same shape as Lecture 1.</p>
                  </div>
                )}

                {!isEmptyLecture && !isResultsView && currentQuestion && (
                  <>
                    <div className="q-card">
                  <div className="q-meta">
                    <span className="q-num">Q{questionIndex + 1} of {questions.length}</span>
                    <span className="q-cat">{currentQuestionCategory?.label || currentQuestion.cat}</span>
                    <span className={`q-diff ${getDifficultyClass(currentQuestion.diff)}`}>{getDifficultyLabel(currentQuestion.diff)}</span>
                    {currentQuestion.retry ? <span className="retry-badge">Retry {currentQuestion.retry}</span> : null}
                  </div>

                  <div className="q-text">{currentQuestion.q}</div>

                  <div className="opts">
                    {currentQuestion.opts.map((option, optionIndex) => {
                      const isCorrectOption = optionIndex === currentQuestion.ans;
                      const isWrongSelection = optionIndex === selectedChoice && selectedChoice !== currentQuestion.ans;
                      let className = 'opt';

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
                          <span className="opt-letter">{String.fromCharCode(65 + optionIndex)}</span>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedChoice !== null && (
                    <>
                      <div className={`feedback ${selectedChoice === currentQuestion.ans ? 'ok' : 'bad'}`}>
                        <strong>{selectedChoice === currentQuestion.ans ? 'Correct!' : 'Not quite.'}</strong>{' '}
                        {currentQuestion.explain}
                        {selectedChoice !== currentQuestion.ans ? (
                          <>
                            <br />
                            <strong>Study loop:</strong> This question was added back into the remaining questions at a random spot.
                          </>
                        ) : null}
                      </div>
                      <div className="deep-dive">
                        <div className="deep-label">Why this matters:</div>
                        {currentQuestion.deep}
                      </div>
                    </>
                  )}
                    </div>

                    <div className="q-footer">
                      <span className="question-hint">Answer to reveal explanation</span>
                      {selectedChoice !== null && (
                        <button className="nbtn primary" onClick={handleNextQuestion} type="button">
                          {questionIndex < questions.length - 1 ? 'Next ->' : 'See results ->'}
                        </button>
                      )}
                    </div>
                  </>
                )}

                {isResultsView && (
                  <div className="results">
                    <div className="result-score">{correctCount}/{questions.length}</div>
                    <div className="result-grade">
                      {getResultsGrade(Math.round((correctCount / questions.length) * 100))}
                      {' - '}
                      {Math.round((correctCount / questions.length) * 100)}%
                      {' - '}
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
                        : 'Focus on the red categories above and retry those sections.'}
                    </p>

                    <div className="results-actions">
                      <button className="nbtn primary" onClick={() => handleCategorySelect('all')} type="button">
                        Retry {getAllCategory(currentLecture).label.toLowerCase()}
                      </button>
                      {categories.map(category => (
                        <button className="nbtn" key={category.key} onClick={() => handleCategorySelect(category.key)} type="button">
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
