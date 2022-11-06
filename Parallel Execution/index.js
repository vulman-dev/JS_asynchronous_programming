import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)
export const getDirectorySize = (pathToDir, cb) => {
    fs.readdir(pathToDir, (_error1, fileName) => {
        if (_error1) {
            cb(_error1);
            return;
        }
        const filePaths = fileName.map((element) => path.join(pathToDir, element));

        async.map(filePaths, fs.stat, (_error2, file) => {
            if (_error2) {
                cb(_error2);
                return;
            }
            const files = file.filter((element) => element.isFile());
            const totalSize = _.sumBy(files, 'size');
            cb(null, totalSize);
        });
    });
};
// END


// TEACHER SOLUTION
const getDirectorySize = (dirpath, cb) => {
    // читаем содержимое переданной папки dirpath
    // readdir принимает вторым аргументом колбэк с двумя аргументами
    // второй аргумент колбэка, filenames, - это массив имен файлов и папок
    fs.readdir(dirpath, (error1, filenames) => {
        // первым делом обрабатываем ошибку - передаем ошибку в колбэк cb,
        // опуская 2-й аргумент, хотя допустимо туда явно передавать null,
        // а из самой функции выходим через return
        if (error1) {
            cb(error1);
            return;
        }
        // если ошибки нет - работаем
        // собираем путь к каждому файлу, синхронная функция
        const filepaths = filenames.map((name) => path.join(dirpath, name));
        // теперь извлекаем информацию о каждом файле/папке
        // при помощи асинхронной функции fs.stat
        // она тоже принимает вторым аргументом колбэк с двумя аргументами
        async.map(filepaths, fs.stat, (_error2, stats) => {
            // точно так же обрабатываем ошибку
            if (_error2) {
                cb(_error2);
                return;
            }
            // если ошибок нет, мы рабоем с массивом stats - 
            // результатом применения fs.stat к каждому элементу массива filepaths
            // в _.sumBy() передаем массив отфильтрованных файлов первым аргументом, 
            // ведь поддиректории мы тут не учитываем,
            // а вторым - имя свойства, по которому осуществляем сложение,
            const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
            // передаём результат во второй параметр колбэка
            cb(null, sum);
        });
    });
};
//END