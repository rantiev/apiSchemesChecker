const apiSchemes = {
    plainSimple: {
        request: {
            name: 'String',
            value: 'Number',
        },
    },
    plainSimpleWithOptionals: {
        request: {
            name: 'String',
            value: '[Number]',
        },
    },
    plainSimpleAllOptionals: {
        request: {
            name: '[String]',
            value: '[Number]',
        },
    },
    levels2Simple: {
        request: {
            name: 'String',
            value: 'Number',
            address: {
                city: 'String',
                street: 'String',
                houseNumber: 'Number'
            }
        },
    },
    levels7: {
        request: {
            lvl1: {
                lvl2: {
                    lvl3: {
                        lvl4: {
                            lvl5: {
                                lvl6: {
                                    lvl7: 'String'
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    arrays: {
        request: {
            listS: ['String'],
            listN: ['Number'],
        },
    },
    arraysComplex: {
        request: {
            listSN: ['String', 'Number', 'String', 'String', 'Number'],
            listNS: ['Number', 'String'],
        },
    },
    // Some kind of real examples
    books: {
        url: '/books',
        /*        request: {
         author: 'Baba Jaba',
         categories: ['Category1', 'Category2'],
         limit: 10,
         },
         response: [
         {
         title: 'Story1',
         author: 'Baba Jaba',
         categories: ['Category1'],
         year: 1951,
         }
         ]*/
        request: {
            author: {
                nameFirst: 'String',
                nameLast: 'String',
            },
            categories: ['String'],
            limit: '[Number]',
            years: ['Number'],
            address: {
                street: '[String]',
                houseNumber: '[Number]'
            }

        },
        response: [
            {
                title: 'String',
                author: 'String',
                categories: ['String'],
                year: 'Number',
            },
        ],
    },
};

const apiMocks = {
    plainSimpleR: {
        request: {
            name: 'Baba Jaba',
            value: 10,
        },
    },
    plainSimpleWithOptionalsR: {
        request: {
            name: 'Baba Jaba',
            //value: 10
        },
    },
    plainSimpleAllOptionalsR: {
        request: {
            //name: 'Baba Jaba',
            //value: 10
        },
    },
    levels2SimpleR: {
        request: {
            name: 's',
            value: 10,
            address: {
                city: 's',
                street: 's',
                houseNumber: 10
            }
        },
    },
    levels7R: {
        request: {
            lvl1: {
                lvl2: {
                    lvl3: {
                        lvl4: {
                            lvl5: {
                                lvl6: {
                                    lvl7: 's'
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    plainSimpleMoreFieldsW: {
        request: {
            name: 'Baba Jaba',
            value: 10,
            extra: undefined,
        },
    },
    plainSimpleW: {
        request: {
            name: 'Baba Jaba',
            value: '10',
        },
    },
    plainSimpleWithOptionalsW: {
        request: {
            name: 10,
            //value: 10
        },
    },
    plainSimpleAllOptionalsW: {
        request: {
            //name: 'Baba Jaba',
            value: '10',
        },
    },
    levels2SimpleW: {
        request: {
            name: 's',
            value: 10,
            address: {
                city: 's',
                street: 15,
                houseNumber: 10
            }
        },
    },
    levels7W: {
        request: {
            lvl1: {
                lvl2: {
                    lvl3: {
                        lvl4: 10
                    }
                }
            }
        },
    },
};

module.exports = {
    apiSchemes,
    apiMocks,
};
