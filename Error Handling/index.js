import fs from 'fs';

// BEGIN (write your solution here)
export const move = (sourceFile, copyPath, cb) => {
    fs.readFile(sourceFile, 'utf-8', (_err, data) => {
        if (_err) {
            cb(_err);
            return;
        }
        fs.writeFile(copyPath, data, 'utf-8', (_err2) => {
            if (_err2) {
                cb(_err2);
                return;
            }
            fs.unlink(sourceFile, (_err3) => {
                if (_err3) {
                    cb(_err3);
                    return;
                }
                cb(null);
            });
        });
    });
};
// END

// TEACHER SOLUTION
const move = (from, to, cb) => {
    fs.readFile(from, 'utf-8', (_error1, data) => {
        if (_error1) {
            cb(_error1);
            return;
        }
        fs.writeFile(to, data, (_error2) => {
            if (_error2) {
                cb(_error2);
                return;
            }
            fs.unlink(from, cb);
        });
    });
};
//END