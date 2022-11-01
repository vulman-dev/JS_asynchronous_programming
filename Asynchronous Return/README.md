# writer.js
Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.

```js
import write from './writer.js';

write('./myfile', 'data', () => {
    console.log('success');
});
```

## Подсказки
* для записи в файл используйте функцию [fs.writeFile()](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback)