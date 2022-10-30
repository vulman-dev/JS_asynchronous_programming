import fs from 'fs';

// BEGIN (write your solution here)
const callback = (_error, data) => console.log(data);

const printer = (dataFile) => {
    return fs.readFile(dataFile, 'utf-8', callback);
};
// END

// TEACHER SOLUTION
export default (filepath) => fs.readFile(
    filepath,
    'utf-8',
    (_error, data) => console.log(data),
);
// END