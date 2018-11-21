/**
 * this file is for testing
 */
const uglify = require('./sender/uglify.js');

const json = {
    b: [3, 4],
    a: {
        aa: null,
        ab: {
            aaa: 1,
            aab: undefined 
        },
        ac: 2
    },
    c: {}
};
const nosj = uglify(json);

console.log(nosj);