Это упражнение вы уже делали, но теперь то же самое нужно сделать с помощью промисов.

# file.js
Реализуйте и экспортируйте асинхронную функцию `getDirectorySize()`, которая считает размер переданной директории (не включая поддиректории).

## Пример:
```js
import { getDirectorySize } from './file.js';

getDirectorySize('/urs/local/bin').then(console.log);
```

## Подсказка
* [fsPromises.readdid](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options) - чтение содержимого директории
* [path.join](https://nodejs.org/api/path.html#pathjoinpaths) - конструирует пути
* [fsPromises.stat](https://nodejs.org/api/fs.html#fspromisesstatpath-options) - информация о файле
* [_.sumBy](https://lodash.com/docs/4.17.15#sumBy) - нахождение суммы в массиве