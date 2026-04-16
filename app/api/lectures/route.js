import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

export const dynamic = 'force-dynamic';

function loadLectures() {
  const dataDirectory = path.join(process.cwd(), 'data');
  const context = {
    window: {},
    console,
    Math
  };

  context.window.window = context.window;
  vm.createContext(context);

  const lectureFiles = fs
    .readdirSync(dataDirectory)
    .filter(name => /^lecture\d+\.js$/.test(name))
    .sort();

  for (const fileName of lectureFiles) {
    const source = fs.readFileSync(path.join(dataDirectory, fileName), 'utf8');
    vm.runInContext(source, context, {filename: fileName});
  }

  return context.window.COMP2151_LECTURES || [];
}

export async function GET() {
  return Response.json(loadLectures());
}
