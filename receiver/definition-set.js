const definitionSet = [
    {
        id: "example1",
        definition: {
            "b": {
                "type": "array"
            },
            "a": {
                "type": "object",
                "children": {
                    "aa": {
                        "type": "number"
                    },
                    "ab": {
                        "type": "object",
                        "children": {
                            "aaa": {
                                "type": "number"
                            },
                            "aab": {
                                "type": "number"
                            }
                        }
                    },
                    "ac": {
                        "type": "number"
                    }
                }
            },
            "c": {
                "type": "object",
                "children": {}
            }
        }
    },
    {
        id: "example2",
        definition: {
            "a": {
                "type": "number"
            },
            "t-e-s-t": {
                "type": "object",
                "children": {
                    "a": {
                        "type": "number"
                    }
                }
            }
        }
    }
];

module.exports = definitionSet;