const definitionSet = [
    {
        id: 'https://map.naver.com/external/vis?request=getSimpleVersion&apiVersion=1.0&output=json&addversion=true',
        definition: {
            result: {
                type: 'object',
                definition: {
                    region: {
                        type: 'object',
                        definition: {
                            rcode: {},
                            doCode: {},
                            doName: {},
                            siCode: {},
                            siName: {},
                            dongCode: {},
                            dongName: {},
                            xPos: {},
                            yPos: {}
                        }
                    },
                    weather: {
                        type: 'object',
                        definition: {
                            weatherCode: {},
                            weatherText: {},
                            temperature: {},
                            iconURL: {},
                            detailURL: {}
                        }
                    }
                }
            }
        }
    },
    {
        id: 'https://www.facebook.com/api/graphql/',
        definition: {
            data: {
                type: 'object',
                definition: {
                    feedback: {
                        type: 'object',
                        definition: {
                            "can_viewer_react": {},
                            "viewer_feedback_reaction_info": {},
                            id: {},
                            "viewer_current_actor": {
                                type: 'object',
                                definition: {
                                    "__typename": {},
                                    id: {}
                                }
                            },
                            "supported_reactions": {},
                            "top_reactions": {
                                type: 'object',
                                definition: {
                                    edges: {}
                                }
                            },
                            reactors: {
                                type: 'object',
                                definition: {
                                    count: {}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
];

module.exports = definitionSet;