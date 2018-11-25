const originalJson = {
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

console.log('original JSON:\n', originalJson, '\n')

/**
 * NOTE: You have to create NOSJ from the JSON whose model is defined in your definition.
 *       If not, You cannot recover the NOSJ.
 * 
 * Sender creates NOSJ to send JSON.
 */
const uglify = require('./sender/uglify.js');

const nosj = uglify(originalJson);
console.log('NOSJ:\n', nosj, '\n');

/**
 * NOTE: Receiver and sender have to share the same definition.
 * 
 * Receiver reads the NOSJ and beautifies it using the definition.
 */
const definition = require('./receiver/definition.json');
const beautify = require('./receiver/beautify.js');

const recoveredJson = beautify(nosj, definition);
console.log('recovered JSON:\n', recoveredJson, '\n');