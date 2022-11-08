import fs from 'fs/promises';

// BEGIN (write your solution here)
export const reverse = (file) => {
    return fs.readFile(file, 'utf-8')
        .then((content) => {
            fs.writeFile(file, content.split('\n').reverse().join('\n'), 'utf-8');
        });
};
// END

// TEACHER SOLUTION
// читаем содержимое файла
const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
// работаем с содержимым: переворачиваем строку
// и записываем результат в тот же файл
    .then((data) => {
        const preparedData = data.split('\n').reverse().join('\n');
        return fs.writeFile(filepath, preparedData);
    })
//END