/**
 * Uglify the JSON
 * 
 * @param json JS object to be NOSJ
 * @param id to distinguish the definition from the definitions
 * 
 * @returns JS object which has id and NOSJ data
 */
const uglify = (json, id) => {
    const nosj = _uglify(json);

    return {
        id,
        data: nosj
    };
}

const _uglify = json => {
    const sortedKeys = Object.keys(json).sort();

    return sortedKeys.reduce((acc, key) => {
        const value = json[key];
        let uglifiedValue;

        if (typeof value === "object" && value !== null) {
            // if value is an object, uglify again
            uglifiedValue = _uglify(value);
        } else {
            uglifiedValue = value;
        }

        acc.push(uglifiedValue);

        return acc;
    }, []);
};

module.exports = uglify;