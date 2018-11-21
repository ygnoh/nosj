/**
 * @param json JS object to be NOSJ
 * @returns nosj - uglified json
 */
const uglify = json => {
    const sortedKeys = Object.keys(json).sort();

    const nosj = sortedKeys.reduce((acc, key) => {
        acc.push(json[key]);

        return acc;
    }, []);

    return nosj;
};

module.exports = uglify;