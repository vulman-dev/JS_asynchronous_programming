import fs from 'fs';

// BEGIN (write your solution here)
const write = (filepath, data, cb) => fs.writeFile(
    filepath,
    data,
    'utf-8',
    (_error, data) => {
        cb()
    }
);
// END

// TEACHER SOLUTION
export default (filepath, data, cb) => {
    fs.writeFile(filepath, data, cb);
};
// END