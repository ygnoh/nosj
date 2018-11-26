const definitionSet = {
    'https://map.naver.com/external/vis?request=getSimpleVersion&apiVersion=1.0&output=json&addversion=true': {
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
    },
    'https://www.facebook.com/api/graphql/': {
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
                        "supported_reactions": {
                            type: 'objectArray',
                            definition: {
                                key: {}
                            }
                        },
                        "top_reactions": {
                            type: 'object',
                            definition: {
                                edges: {
                                    type: 'objectArray',
                                    definition: {
                                        "reaction_count": {},
                                        node: {
                                            type: 'object',
                                            definition: {
                                                key: {},
                                                id: {}
                                            }
                                        }
                                    }
                                }
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
};

module.exports = definitionSet;