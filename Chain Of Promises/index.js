import fs from 'fs/promises';
import { resourceLimits } from 'worker_threads';

// BEGIN (write your solutione here)
export const getTypes = (paths) => paths.reduce((acc, path) => {
    const newAcc = acc.then((data1) => fs.stat(path)
        .then((data2) => {
            const elementType = data2.isDirectory() ? 'directory': 'file';
            return [...data1, elementType];
        })
        .catch(() => [...data1, null]));
        return newAcc;
}, Promise.resolve([]));
// END

// TEACHER SOLUTION
const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes1 = (filesPath) => {
  // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
  // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
    // result - предыдущее значение аккумулятора
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
//END