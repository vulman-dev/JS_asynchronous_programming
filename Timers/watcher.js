import { time } from 'console';
import fs from 'fs';
import { last } from 'lodash';

// BEGIN (write your solution here)
const watch = (filepath, period, cb) => {
    let lastCheckTime = Date.now();

    const check = (timerId) => {
        fs.stat(filepath, (_error1, stats) => {
            if (_error1) {
                clearInterval(timerId);
                cb(_error1);
                return;
            }
            const { mtimeMs } = stats;
            if ( mtimeMs > lastCheckTime ) {
                cb(null);
                lastCheckTime = mtimeMs;
            }
        });
    };

    const timerId = setInterval(() => check(timerId), period);
    return timerId;
}
// END

// TEACHER SOLUTION
export default (filepath, period, cb) => {
    // фиксируем время последней проверки - момент запуска функции
    let lastCheckTime = Date.now();
    // функция проверки файла
    const check = (timerId) => {
        fs.stat(filepath, (_error1, stats) => {
            // в случае ошибки отключаем таймер
            // и отдаём в колбэк ошибку
            if (_error1) {
                clearInterval(timerId);
                cb(_error1);
                return;
            }
            // извлекаем время последней модификации файла
            const { mtimeMs } = stats;
            // если файл был модифицирован после запуска функции, 
            // вызываем колбэк и меняем время последней проверки
            if ( mtimeMs > lastCheckTime ) {
                cb(null);
                lastCheckTime = mtimeMs;
            }
        });
    };
    // создаём таймер и передаем его id в функцию проверки файла
    const timerId = setInterval(() => check(timerId), period);
    return timerId;
}
// END