/**
 * Recover the NOSJ
 * 
 * @param nosj uglified array (NOSJ)
 * @param definition to recover the NOSJ, the definition required
 * 
 * @returns JSON - original JSON
 */
const beautify = (nosj, definition) => {
    const sortedKeys = Object.keys(definition).sort();

    return nosj.reduce((acc, value, index) => {
        const key = sortedKeys[index];
        const { type, definition: childDefinition } = definition[key];

        if (type === "object") {
            acc[key] = beautify(value, childDefinition)
        } else {
            acc[key] = value;
        }

        return acc;
    }, {});
};

module.exports = beautify;