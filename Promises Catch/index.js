import { setFips } from 'crypto';
import fsp from 'fs/promises';

// BEGIN (write your solution here)
export const touch = (filepath) => fsp.access(filepath)
    .catch(() => fsp.writeFile(filepath, ''));
// END

// TEACHER SOLUTION
const touch = (filepath) => fsp.access(filepath)
    // в случае, если файла не существует, функция выбрасывает ошибку
    // ловим эту ошибку и создаём файл
    .catch(() => fsp.writeFile(filepath, ''));
// END