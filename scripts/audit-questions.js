const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'data');
const optionLengthSpreadLimit = 45;
const answerSlotSpreadLimit = 8;
const triviaPatterns = [
  /\bquote\b/i,
  /\bCharlotte\b/i,
  /\bJohn the UX Manager\b/i,
  /\bOOPSLA\b/i,
  /\bStandish\b/i,
  /\bPMI\b/i,
  /\bSnowbird\b/i,
  /\bAgile Alliance\b/i,
  /\bTakeuchi\b/i,
  /\bNonaka\b/i,
  /\bSchwaber\b/i,
  /\bSutherland\b/i,
  /\bin what year\b/i,
  /\bwhich decade\b/i
];

function loadLectures() {
  return fs
    .readdirSync(dataDir)
    .filter(name => /^lecture\d+\.json$/.test(name))
    .sort()
    .map(file => {
      const source = fs.readFileSync(path.join(dataDir, file), 'utf8');
      return JSON.parse(source);
    });
}

function rawScoreDistribution(questions) {
  const counts = [0, 0, 0, 0];
  for (const question of questions) {
    if (Number.isInteger(question.ans) && question.ans >= 0 && question.ans < counts.length) {
      counts[question.ans]++;
    }
  }
  return counts;
}

function scoreDistribution(questions) {
  const counts = [0, 0, 0, 0];
  for (const question of questions) {
    if (Number.isInteger(question.ans) && question.ans >= 0 && question.ans < counts.length) {
      counts[question.ans]++;
    }
  }
  return counts;
}

function optionSpread(question) {
  if (!question.opts || question.opts.length === 0) return 0;
  const lengths = question.opts.map(option => option.length);
  return Math.max(...lengths) - Math.min(...lengths);
}

const lectures = loadLectures();
let totalWarnings = 0;

for (const lecture of lectures) {
  const questions = lecture.questions || [];
  const distribution = scoreDistribution(questions);
  const rawDistribution = rawScoreDistribution(questions);
  const rawSpread = Math.max(...rawDistribution) - Math.min(...rawDistribution);

  console.log(`${lecture.id}: ${questions.length} questions, answer slots A-D = ${distribution.join('/')}`);

  if (questions.length > 0 && rawSpread > answerSlotSpreadLimit) {
    totalWarnings++;
    console.log(`  Raw answer slot spread ${rawSpread}. Rebalance source opts/ans so correct answers are not concentrated in one letter.`);
  }

  questions.forEach((question, index) => {
    const warnings = [];
    const matchedTrivia = triviaPatterns.filter(pattern => pattern.test(question.q)).map(pattern => pattern.source);
    const spread = optionSpread(question);

    if (matchedTrivia.length > 0) {
      warnings.push('possible slide-trivia wording');
    }
    if (spread > optionLengthSpreadLimit) {
      warnings.push(`option length spread ${spread}`);
    }

    if (warnings.length > 0) {
      totalWarnings++;
      console.log(`  Q${index + 1}: ${warnings.join('; ')} -> ${question.q}`);
    }
  });
}

if (totalWarnings === 0) {
  console.log('No question quality warnings found.');
} else {
  console.log(`${totalWarnings} warning(s). Review before adding or committing new question batches.`);
}
