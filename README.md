# COMP2151 Exam Prep

Browser-based quiz app for COMP2151 exam review.

## Start

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current Content

- Lecture 1 deep Q&A
- Lecture 2 Scrum Framework Q&A
- 130 questions across Lectures 1-2
- Category filters
- Lecture selector for Lectures 1-8
- Failed-question retry loop
- Shuffled answer options on retries
- Score tracking
- Per-question explanations

## Adding Lectures

Each lecture has its own data file in `data/`.

- `data/lecture1.js` contains Lecture 1 questions.
- `data/lecture2.js` contains Lecture 2 questions.
- `data/lecture3.js` through `data/lecture8.js` are placeholders.

To add a lecture, replace the matching placeholder file with:

```js
window.COMP2151_LECTURES = window.COMP2151_LECTURES || [];
window.COMP2151_LECTURES.push({
  id: 'lecture2',
  title: 'Lecture 2',
  subtitle: 'Topic Name',
  description: 'Short lecture summary.',
  categories: [
    {key: 'topic', label: 'Topic', cls: 'c1'}
  ],
  questions: [
    {
      cat: 'topic',
      diff: 'easy',
      q: 'Question text?',
      opts: ['A', 'B', 'C', 'D'],
      ans: 0,
      explain: 'Short answer explanation.',
      deep: 'Longer concept explanation.'
    }
  ]
});
```
