const definitionSet = [
    {
        id: "example1",
        definition: {
            "b": {
                "type": "array"
            },
            "a": {
                "type": "object",
                "definition": {
                    "aa": {
                        "type": "number"
                    },
                    "ab": {
                        "type": "object",
                        "definition": {
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
                "definition": {}
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
                "definition": {
                    "a": {
                        "type": "number"
                    }
                }
            }
        }
    }
];

module.exports = definitionSet;