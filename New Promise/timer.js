const { delay } = require("lodash");

// BEGIN (write your solution here)
export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// END