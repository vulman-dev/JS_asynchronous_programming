import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

// BEGIN (write your solution here)
const getDirectorySize = (dirpath) => {
    const promise1 = fsp.readdir(dirpath).then((names) => {
        const elementPaths = names.map((name) => path.join(dirpath, name));
        const promises = elementPaths.map((file) => fsp.stat(file));

        return Promise.all(promises);
    });

    return promise1.then((stats) => {
        const files = stats.filter((stat) => stat.isFile());
        return _.sumBy(files, 'size');
    });
};
// END

// TEACHER SOLUTION
export const getDirectorySize1 = (dirpath) => {
    // читаем список имен файлов в папке
    const promise = fsp.readdir(dirpath).then((filenames) => {
        // строим путь к файлам
        const filepaths = filenames.map((name) => path.join(dirpath, name));
        // извлекаем метаданные о файлах
        const promises = filepaths.map((filepath) => fsp.stat(filepath));
        // превращаем массив промисов (promises) в один-единственный промис,
        // возвращаем массив
        return Promise.all(promises);
    });

    // из промиса получаем массив stats
    // суммируем размеры файлов в директории
    return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};
// END