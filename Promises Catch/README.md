# file.js
Реализуйте и экспортируйте асинхронную функцию `touch()`, которая создаёт файл, если его не существует. Если файла не существует, то функция должна успешно завершиться.

```js
import { touch } from './file.js';

touch('/myfile').then(() => console.log('created!'));

// Повторный вызов успешно завершается
touch('/myfile').then(() => console.log('created!'));
```

## Подсказка
* [fs.Promises.access](https://nodejs.org/api/fs.html#fspromisesaccesspath-mode) — проверка существования файла