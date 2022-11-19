import { resolve } from "path";

// BEGIN (write your solution here)
const promisify = (asyncFn) => (...args) => new Promise((resolve, reject) => asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data))));
// END

// TEACHER SOLUTION
export default (asyncFn) => (...args) => {
    const promise = new Promise((resolve, reject) => {
        asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
    });

    return promise;
};
// END