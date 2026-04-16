# COMP2151 Exam Prep

Next.js and React quiz app for COMP2151 exam review.

## Start

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy on Vercel

This project is ready to deploy on Vercel as a standard Next.js app.

### Recommended settings

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output setting: leave default
- Node.js version: `20.x` or newer

### Notes

- No environment variables are required right now.
- `vercel.json` already enables clean URLs and basic security headers.
- Before deploying, run a local production check:

```bash
npm run build
```

### First deploy

1. Import the GitHub repository into Vercel.
2. Select the branch you want to deploy.
3. Keep the default Next.js settings.
4. Deploy.

For production, set the production branch to `main` after the feature branch is merged.

## Current Content

- Lecture 1 deep Q&A
- Lecture 2 Scrum Framework Q&A
- Lecture 3 Agile Project Management Q&A
- Lecture 4 Scrum Processes Q&A
- 266 questions across Lectures 1-4
- Category filters
- Lecture selector for Lectures 1-8
- Failed-question retry loop
- Shuffled answer options on load and retries
- Score tracking
- Per-question explanations

## Question Quality

Before adding or committing new question batches, run:

```bash
npm run audit:questions
```

Use the warnings as a review checklist:

- Avoid trivia that only tests specific slide names, quotes, dates, or example characters.
- Prefer concept questions that still work if the lecture examples change.
- Keep all four answer options roughly the same length so the correct answer does not stand out.
- Keep raw answer positions balanced across A, B, C, and D.

## Adding Lectures

Each lecture has its own JSON data file in `data/`.

- `data/lecture1.json` contains Lecture 1 questions.
- `data/lecture2.json` contains Lecture 2 questions.
- `data/lecture3.json` contains Lecture 3 questions.
- `data/lecture4.json` contains Lecture 4 questions.
- `data/lecture5.json` through `data/lecture8.json` are placeholders.

The Next.js app loads these lecture files through `app/api/lectures/route.js`. The API owns runtime answer-option shuffling, so lecture files should stay as plain JSON data.

To add a lecture, replace the matching placeholder file with:

```json
{
  "id": "lecture5",
  "title": "Lecture 5",
  "subtitle": "Topic Name",
  "description": "Short lecture summary.",
  "categories": [
    {"key": "all", "label": "All 65", "cls": "c0"},
    {"key": "topic", "label": "Topic", "cls": "c1"}
  ],
  "questions": [
    {
      "cat": "topic",
      "diff": "easy",
      "q": "Question text?",
      "opts": ["Option A", "Option B", "Option C", "Option D"],
      "ans": 0,
      "explain": "Short answer explanation.",
      "deep": "Longer concept explanation."
    }
  ]
}
```

If a lecture arrives as a JavaScript question array, convert it to this JSON shape before committing.
