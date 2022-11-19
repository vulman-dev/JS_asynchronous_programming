import fsp from 'fs/promises';

// BEGIN (write your solution here)
const exchange = async (inputhPath1, inputhPath2) => {
    const promise1 = fsp.readFile(inputhPath1, 'utf-8');
    const promise2 = fsp.readFile(inputhPath2, 'utf-8');
    const [data1, data2] = await Promise.all([promise1, promise2]);

    await fsp.writeFile(inputhPath1, `${data2}`);
    await fsp.writeFile(inputhPath2, `${data1}`);
};
// END

// TEACHER SOLUTION
export const exchange1 = async (filepath1, filepath2) => {
    // Читаем оба файла
    const reading1 = fsp.readFile(filepath1);
    const reading2 = fsp.readFile(filepath2);
    // Делаем массив из двух промисов, превращаем его в промис
    // резолвящийся в массив при помощи Promise.all(),
    // и деструктурируем этот зарезолвленный массив
    const [data1, data2] = await Promise.all([reading1, reading2]);
    // Меняем содержимое файлов (мутируем их)
    const writing1 = fsp.writeFile(filepath1, data2);
    const writing2 = fsp.writeFile(filepath2, data1);
    await Promise.all([writing1, writing2]);
    // Выполняем эти операции параллельно. Но можно
    // сделать это и последовательно:
    // await fsp.writeFile(filepath1, data2);
    // await fsp.writeFile(filepath2, data1);
};
// END