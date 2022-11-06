# file.js
Реализуйте и экспортируйте функцию `move`, которая асинхронно перемещает файл из одного места в другое. Ее параметры:
1. Путь до файла исходника
2. Путь по которому нужно копировать файл
3. Колбек, у которого единственный аргумент — ошибка.

Алгоритм работы функции следующий:
1. Читаем исходный файл
2. Создаём новый файл и записываем туда данные исходного файла (это важно сделать до попытки удаления исходного файла!)
3. Удаляем исходный файл

Реальная функция `move` устроена не так. Если исходник и приемник находятся на одном устройстве, то копирования не происходит, меняются лишь указатели в фс.

```js
import { move } from './file.js';

move('/opt/myfile', '/tmp/newfile', (error) => {
    if (error) {
        console.log('oops');
        return;
    }
    console.log('yes!');
});
```
Другие примеры смотрите в тестах.

## Подсказки
* [fs.unlink](https://nodejs.org/api/fs.html#fsunlinkpath-callback) - удаление файла
* [fs.readFile](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback) - чтение файла
* [fs.writeFile](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback) - запись в файл