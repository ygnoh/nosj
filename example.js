const definitionSet = require('./receiver/definition-set.js');

const exampleData = [
    {
        id: 'https://map.naver.com/external/vis?request=getSimpleVersion&apiVersion=1.0&output=json&addversion=true',
        json: {
            "result": {
                "region": {
                    "rcode": "02190800",
                    "doCode": "0200000000",
                    "doName": "경기도",
                    "siCode": "0219000000",
                    "siName": "부천시",
                    "dongCode": "02190800",
                    "dongName": "성곡동",
                    "xPos": "126.80348",
                    "yPos": "37.51675"
                },
                "weather": {
                    "weatherCode": "1",
                    "weatherText": "맑음",
                    "temperature": "4.0",
                    "iconURL": "https://ssl.pstatic.net/static/weather/images/w_icon/w_s1.gif",
                    "detailURL": "http://weather.naver.com/rgn/townWetr.nhn?naverRgnCd=02190800"
                }
            }
        }
    },
    {
        id: 'https://www.facebook.com/api/graphql/',
        json: {
            data: {
                "feedback": {
                    "can_viewer_react": true,
                    "viewer_feedback_reaction_info": null,
                    "id": "ZmVlZGJhY2s6MjEzNzA5MzQ5NjM0MTg5MA==",
                    "viewer_current_actor": {
                        "__typename": "User",
                        "id": "100009173416209"
                    },
                    "supported_reactions": [
                        {
                            "key": 1
                        },
                        {
                            "key": 2
                        },
                        {
                            "key": 4
                        },
                        {
                            "key": 3
                        },
                        {
                            "key": 7
                        },
                        {
                            "key": 8
                        }
                    ],
                    "top_reactions": {
                        "edges": [
                            {
                                "reaction_count": 461,
                                "node": {
                                    "key": 1,
                                    "id": "1635855486666999"
                                }
                            },
                            {
                                "reaction_count": 180,
                                "node": {
                                    "key": 4,
                                    "id": "115940658764963"
                                }
                            },
                            {
                                "reaction_count": 39,
                                "node": {
                                    "key": 2,
                                    "id": "1678524932434102"
                                }
                            },
                            {
                                "reaction_count": 14,
                                "node": {
                                    "key": 3,
                                    "id": "478547315650144"
                                }
                            }
                        ]
                    },
                    "reactors": {
                        "count": 694
                    }
                }
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