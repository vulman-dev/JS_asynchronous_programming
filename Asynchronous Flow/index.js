import fs from 'fs';

// BEGIN (write your solution here)
const compareFileSizes = (file1, file2, cb) => {
    fs.stat(file1, (_error1, data1) => {
        fs.stat(file2, (_error2, data2) => {
            console.log(cb(null, Math.sign(data1.size - data2.size)));
        })
    })
};
// END
