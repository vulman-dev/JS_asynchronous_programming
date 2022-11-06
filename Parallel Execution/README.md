# info.js
Реализуйте и экспортируйте асинхронную функцию `getDirectorySize()`, которая считает размер переданной директории не включая поддиректории. Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async

## Примеры
```js
import { getDirectorySize } from './info.js';

getDirectorySize('/usr/local/bin', (err, size) => {
    console.log(size);
});
```

## Подсказки
* [fs.readdir()](https://nodejs.org/api/fs.html#fsreaddirpath-options-callback) - чтение содержимого директории, возвращает файлы и папки в директории
* [path.join()](https://nodejs.org/api/path.html#pathjoinpaths) - конструирует пути
* [async.map()](http://caolan.github.io/async/v3/docs.html#map)
* [fs.stat()](https://nodejs.org/api/fs.html#fsstatpath-options-callback) - информация о файле. В получаемом объекте содержится метод [isFile() для проверки является ли элемент файлом](https://nodejs.org/api/fs.html#statsisfile)
* [_.sumBy()](https://lodash.com/docs/4.17.15#sumBy) - нахождение суммы в массиве
* колбек должен вызываться и в случае ошибки