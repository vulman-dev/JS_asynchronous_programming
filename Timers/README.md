# watcher.js
Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла с заданной переодичностью. Функция должна возвращать идентификатор таймера, запущенного внутри.

Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек. Если во время анализа файла (через `fs.stat`) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.

Отслеживание изменений файла должна начинаться с момента вызова функции. Параметры функции:
* Путь до файла, который нужно отслеживать
* Период отслеживания
* Колбек, принимающий аргументов ошибку

```js
import watch from './wathcer.js';

const id = watch(filepath, 500, (err) => {
    console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд
```

## Подсказки
* [stats.mtimeMs](https://nodejs.org/api/fs.html#statsmtimems) — время последнего изменения
* [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) — текущая дата
* [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)