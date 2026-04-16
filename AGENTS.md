# COMP2151 Exam Prep Agent Guide

## Project Shape

This is a Next.js/React quiz app for COMP2151 exam prep.

- `app/page.js` renders the app shell.
- `components/QuizApp.js` contains the client-side quiz UI and quiz flow.
- `app/api/lectures/route.js` loads lecture data from `data/` in a VM context and returns it as JSON.
- `data/lecture1.js` through `data/lecture8.js` are lecture question banks.
- `scripts/audit-questions.js` validates question quality before commits.

The app currently uses standalone JavaScript lecture files instead of JSON because each lecture registers itself into `window.COMP2151_LECTURES`.

## Lecture File Contract

Each populated lecture file must:

- Define `categories`, including an `all` category with the correct question count.
- Define a question array with objects containing `cat`, `diff`, `q`, `opts`, `ans`, `explain`, and `deep`.
- Register the lecture with `window.COMP2151_LECTURES.push(...)`.
- Pass questions through `shuffleQuestionOptions` in the registration call.

Expected registration pattern:

```js
questions: lectureXQuestions.map(shuffleQuestionOptions)
```

Do not remove runtime option shuffling. It prevents students from memorizing answer positions.

## Question Quality Rules

Before committing any question-bank change, run:

```bash
npm run audit:questions
```

The audit checks:

- No slide-trivia wording such as specific example names, quotes, dates, or conference names.
- No answer option that is much longer than the others.
- Raw source answer slots are balanced across A, B, C, and D.
- Loaded answer slots are also shown after runtime shuffling.

If raw answers are concentrated in one slot, rebalance the source `opts` and `ans` values directly. Runtime shuffling is still required, but raw source files should not preserve an obvious pattern.

Target raw distribution for 65 questions is roughly `17/16/16/16`. For 71 questions, roughly `18/18/18/17`.

## Validation

Use these checks after editing lecture data:

```bash
for f in data/*.js; do node --check "$f" || exit 1; done
npm run audit:questions
```

For a full app build, this project requires Node `>=20.9.0` because it uses Next.js 16. If the shell is on Node 18, `npm run build` will fail with a Node version error even if the data is valid.

## Git Workflow

The user usually wants changes committed and pushed to `main`.

Recommended flow:

```bash
git status -sb
git fetch origin
git rev-list --left-right --count main...origin/main
git add <changed-files>
git commit -m "Add lecture X question bank"
git push origin main
```

In this environment, WSL Git may not have GitHub credentials. If normal push fails, Windows Git has worked:

```bash
"/mnt/c/Program Files/Git/cmd/git.exe" push
```

Never commit generated dependency folders such as `node_modules/`.
