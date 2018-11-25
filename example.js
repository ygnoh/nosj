const definitionSet = require('./receiver/definition-set.js');

const exampleData = [
    {
        id: 'example1',
        json: {
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
        }
    },
    {
        id: 'example2',
        json: {
            a: 10,
            "t-e-s-t": {
                a: 100
            }
        }
    }
];

exampleData.forEach((example, index) => {
    console.log(`***** EXAMPLE ${index} *****`);

    const { id: exampleId, json: originalJSON } = example;

    console.log('original JSON:\n', originalJSON, '\n')

    /**
     * NOTE: You can create NOSJ only from the JSON whose model is defined in your definition.
     *       If not, You cannot recover the NOSJ.
     * 
     * Sender creates NOSJ to send JSON.
     */
    const uglify = require('./sender/uglify.js');

    const nosj = uglify(originalJSON, exampleId);
    console.log('NOSJ:\n', nosj.data, '\n');

    /**
     * NOTE: Receiver and sender have to share the same definition.
     * 
     * Receiver reads the NOSJ and beautifies it using the definition.
     */
    const beautify = require('./receiver/beautify.js');

    const { definition } = definitionSet.find(({ id }) => id === exampleId);

    const recoveredJson = beautify(nosj.data, definition);
    console.log('recovered JSON:\n', recoveredJson, '\n');
});