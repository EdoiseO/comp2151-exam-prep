import fs from 'node:fs';
import path from 'node:path';

export const dynamic = 'force-dynamic';

function shuffleQuestionOptions(question) {
  const shuffled = question.opts.map((text, index) => ({text, index}));

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return {
    ...question,
    opts: shuffled.map(option => option.text),
    ans: shuffled.findIndex(option => option.index === question.ans)
  };
}

function loadLectures() {
  const dataDirectory = path.join(process.cwd(), 'data');
  const lectureFiles = fs
    .readdirSync(dataDirectory)
    .filter(name => name.endsWith('.json'))
    .sort((left, right) => {
      const leftMatch = left.match(/^lecture(\d+)\.json$/);
      const rightMatch = right.match(/^lecture(\d+)\.json$/);

      if (leftMatch && rightMatch) {
        return Number(leftMatch[1]) - Number(rightMatch[1]);
      }

      if (leftMatch) return -1;
      if (rightMatch) return 1;

      return left.localeCompare(right);
    });

  return lectureFiles.map(fileName => {
    const source = fs.readFileSync(path.join(dataDirectory, fileName), 'utf8');
    const lecture = JSON.parse(source);

    return {
      ...lecture,
      questions: (lecture.questions || []).map(shuffleQuestionOptions)
    };
  });
}

export async function GET() {
  return Response.json(loadLectures());
}
