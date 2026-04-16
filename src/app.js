const lectures = window.COMP2151_LECTURES || [];

let currentLecture = lectures.find(lecture => lecture.questions.length > 0) || lectures[0];
let currentCat = 'all';
let questions = [];
let qi = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let answered = false;
let catScores = {};

function getQuestionPool() {
  if (!currentLecture) return [];
  if (currentCat === 'all') return [...currentLecture.questions];
  return currentLecture.questions.filter(q => q.cat === currentCat);
}

function getCategories() {
  if (!currentLecture) return [];
  return currentLecture.categories.filter(c => c.key !== 'all');
}

function getAllCategory() {
  const total = currentLecture?.questions.length || 0;
  return {key: 'all', label: `All ${total}`, cls: 'c0'};
}

function resetCatScores() {
  catScores = {};
  getCategories().forEach(c => {
    catScores[c.key] = {correct: 0, total: 0};
  });
}

function resetQuiz() {
  questions = getQuestionPool();
  qi = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  answered = false;
  resetCatScores();
}

function renderLectureNav() {
  const nav = document.getElementById('lecture-nav');
  nav.innerHTML = lectures.map(lecture => {
    const count = lecture.questions.length;
    const status = count > 0 ? `${count} questions` : 'Coming soon';
    return `
      <button class="lecture-btn${currentLecture?.id === lecture.id ? ' active' : ''}" onclick="setLecture('${lecture.id}')">
        <span>${lecture.title}</span>
        <span class="lecture-count">${status}</span>
      </button>`;
  }).join('');
}

function renderLectureHeader() {
  const total = currentLecture?.questions.length || 0;
  document.getElementById('lecture-title').textContent = currentLecture
    ? `${currentLecture.title} - ${currentLecture.subtitle}`
    : 'No Lectures Loaded';
  document.getElementById('lecture-subtitle').textContent = currentLecture
    ? currentLecture.description
    : 'Add lecture files under the data folder.';
  document.getElementById('sc-left').textContent = total;
}

function renderNav() {
  const counts = {};
  getCategories().forEach(c => {
    counts[c.key] = currentLecture.questions.filter(q => q.cat === c.key).length;
  });
  const categories = [getAllCategory(), ...getCategories()];
  document.getElementById('cat-nav').innerHTML = categories.map(c => `
    <button class="cat-btn ${c.cls}${currentCat === c.key ? ' active' : ''}" onclick="setCat('${c.key}')">
      ${c.label}${c.key !== 'all' ? ` <span style="font-size:10px;opacity:0.7">(${counts[c.key] || 0})</span>` : ''}
    </button>`).join('');
}

function setLecture(id) {
  const nextLecture = lectures.find(lecture => lecture.id === id);
  if (!nextLecture) return;
  currentLecture = nextLecture;
  currentCat = 'all';
  resetQuiz();
  renderLectureNav();
  renderLectureHeader();
  renderNav();
  renderQ();
}

function setCat(k) {
  currentCat = k;
  resetQuiz();
  updateSc();
  renderNav();
  renderQ();
}

function updateSc() {
  const total = questions.length;
  document.getElementById('sc-score').textContent = score;
  document.getElementById('sc-correct').textContent = correct;
  document.getElementById('sc-wrong').textContent = wrong;
  document.getElementById('sc-left').textContent = Math.max(0, total - qi);
  const pct = qi > 0 ? Math.round(correct / qi * 100) : 0;
  document.getElementById('sc-pct').textContent = pct + '%';
  document.getElementById('pbar').style.width = (total > 0 ? Math.round(qi / total * 100) : 0) + '%';
}

function renderQ() {
  updateSc();
  if (!currentLecture || currentLecture.questions.length === 0) {
    renderEmptyLecture();
    return;
  }
  if (qi >= questions.length) {
    renderResults();
    return;
  }
  const q = questions[qi];
  const catLabel = getCategories().find(c => c.key === q.cat)?.label || q.cat;
  const diffCls = q.diff === 'easy' ? 'diff-easy' : q.diff === 'med' ? 'diff-med' : 'diff-hard';
  document.getElementById('q-area').innerHTML = `
    <div class="q-card">
      <div class="q-meta">
        <span class="q-num">Q${qi + 1} of ${questions.length}</span>
        <span class="q-cat">${catLabel}</span>
        <span class="q-diff ${diffCls}">${q.diff === 'easy' ? 'Easy' : q.diff === 'med' ? 'Medium' : 'Hard'}</span>
        ${q.retry ? `<span class="retry-badge">Retry ${q.retry}</span>` : ''}
      </div>
      <div class="q-text">${q.q}</div>
      <div class="opts">
        ${q.opts.map((o, i) => `<button class="opt" id="opt${i}" onclick="ans(${i})"><span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${o}</span></button>`).join('')}
      </div>
      <div class="feedback" id="fb"></div>
      <div class="deep-dive" id="dd"><div class="deep-label">Why this matters:</div>${q.deep}</div>
    </div>
    <div class="q-footer">
      <span style="font-size:12px;color:var(--color-text-secondary)">Answer to reveal explanation</span>
      <button class="nbtn primary" id="nxt" style="display:none" onclick="nextQ()">${qi < questions.length - 1 ? 'Next ->' : 'See results ->'}</button>
    </div>`;
  answered = false;
}

function renderEmptyLecture() {
  document.getElementById('q-area').innerHTML = `
    <div class="results">
      <div class="result-grade">${currentLecture.title} is ready for content.</div>
      <p style="font-size:13px;margin:1rem 0">${currentLecture.description}</p>
      <p style="font-size:13px;margin:1rem 0">Add questions to <code>data/${currentLecture.id}.js</code> using the same shape as Lecture 1.</p>
    </div>`;
  document.getElementById('pbar').style.width = '0%';
}

function ans(chosen) {
  if (answered) return;
  answered = true;
  const q = questions[qi];
  const ok = chosen === q.ans;
  if (ok) {
    correct++;
    score += q.diff === 'easy' ? 1 : q.diff === 'med' ? 2 : 3;
  } else {
    wrong++;
    requeueQuestion(q);
  }
  if (catScores[q.cat]) {
    catScores[q.cat].total++;
    if (ok) catScores[q.cat].correct++;
  }
  q.opts.forEach((_, i) => {
    const b = document.getElementById('opt' + i);
    b.disabled = true;
    if (i === q.ans) b.classList.add(chosen === q.ans ? 'correct' : 'reveal');
    else if (i === chosen && !ok) b.classList.add('wrong');
  });
  const fb = document.getElementById('fb');
  fb.innerHTML = `<strong>${ok ? 'Correct!' : 'Not quite.'}</strong> ${q.explain}${ok ? '' : '<br><strong>Study loop:</strong> This question was added back into the remaining questions at a random spot.'}`;
  fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
  document.getElementById('dd').className = 'deep-dive show';
  document.getElementById('nxt').style.display = 'inline-block';
  updateSc();
}

function requeueQuestion(q) {
  const retryQuestion = {...q, ...shuffleOptions(q), retry: (q.retry || 0) + 1};
  const firstPossibleIndex = qi + 1;
  const lastPossibleIndex = questions.length;
  const insertAt = Math.floor(Math.random() * (lastPossibleIndex - firstPossibleIndex + 1)) + firstPossibleIndex;
  questions.splice(insertAt, 0, retryQuestion);
}

function shuffleOptions(q) {
  const shuffled = q.opts.map((text, index) => ({text, index}));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return {
    opts: shuffled.map(o => o.text),
    ans: shuffled.findIndex(o => o.index === q.ans)
  };
}

function nextQ() {
  qi++;
  renderQ();
}

function renderResults() {
  const total = questions.length;
  const maxPts = questions.reduce((a, q) => a + (q.diff === 'easy' ? 1 : q.diff === 'med' ? 2 : 3), 0);
  const pct = Math.round(correct / total * 100);
  const grade = pct === 100 ? 'Perfect score!' : pct >= 85 ? 'Excellent!' : pct >= 70 ? 'Great work!' : pct >= 55 ? 'Good effort!' : 'Keep going!';
  const bd = getCategories().map(c => {
    const cs = catScores[c.key] || {correct: 0, total: 0};
    const p = cs.total > 0 ? Math.round(cs.correct / cs.total * 100) : 0;
    const col = p >= 70 ? '#111' : p >= 45 ? '#BA7517' : '#E24B4A';
    return `<div class="cat-row">
      <span style="font-size:12px;min-width:100px;color:var(--color-text-secondary)">${c.label}</span>
      <div class="cat-bar-bg"><div class="cat-bar-fill" style="width:${p}%;background:${col}"></div></div>
      <span class="cat-score-lbl">${cs.correct}/${cs.total} (${p}%)</span>
    </div>`;
  }).join('');
  document.getElementById('q-area').innerHTML = `
    <div class="results">
      <div class="result-score">${correct}/${total}</div>
      <div class="result-grade">${grade} &nbsp;-&nbsp; ${pct}% &nbsp;-&nbsp; ${score} / ${maxPts} pts</div>
      <div class="cat-breakdown" style="margin-top:1rem">${bd}</div>
      <p style="font-size:13px;margin:1rem 0">${pct >= 70 ? `Strong command of ${currentLecture.title}.` : 'Focus on the red categories above and retry those sections.'}</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nbtn primary" onclick="setCat('all')">Retry ${getAllCategory().label.toLowerCase()}</button>
        ${getCategories().map(c => `<button class="nbtn" onclick="setCat('${c.key}')">${c.label}</button>`).join('')}
      </div>
    </div>`;
  document.getElementById('pbar').style.width = '100%';
}

window.setLecture = setLecture;
window.setCat = setCat;
window.ans = ans;
window.nextQ = nextQ;

resetQuiz();
renderLectureNav();
renderLectureHeader();
renderNav();
renderQ();
