/**
 * @param json JS object to be NOSJ
 * @returns array - uglifed json
 */
const uglify = json => {
    const sortedKeys = Object.keys(json).sort();

    return sortedKeys.reduce((acc, key) => {
        const value = json[key];
        let uglifiedValue;

        if (typeof value === "object" && value !== null) {
            // if value is an object, uglify again
            uglifiedValue = uglify(value);
        } else {
            uglifiedValue = value;
        }

        acc.push(uglifiedValue);

        return acc;
    }, []);
};

module.exports = uglify;