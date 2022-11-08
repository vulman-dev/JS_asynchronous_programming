# file.js
Реализуйте и экспортируйте асинхронную функцию `reverse()`, которая изменяет порядок расположения строк в файле на обратный. Функция должна перезаписать файл.

```js
# file.txt
one
two
```

```js
import { reverse } from './file.js';

reverse('file.txt');
// two
// one
```