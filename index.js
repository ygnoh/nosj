/**
 * this file is for testing
 */
const uglify = require('./sender/uglify.js');

const json = {
    b: 20,
    a: 10,
    c: 30
};
const nosj = uglify(json);

console.log(nosj);