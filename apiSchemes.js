const apiSchemes = {
    plainSimple: {
        request: {
            name: 'String',
            value: 'Number'
        }
    },
    plainSimpleWithOptionals: {
        request: {
            name: 'String',
            value: '[Number]'
        }
    },
    plainSimpleAllOptionals: {
        request: {
            name: '[String]',
            value: '[Number]'
        }
    },
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
                nameFirst: '[String]',
                nameLast: '[String]',
            },
            categories: ['String'],
            limit: '[Number]',
        },
        response: [
            {
                title: 'String',
                author: 'String',
                categories: ['String'],
                year: 'Number',
            }
        ]
    }
};
const apiMocks = {
    //right
    plainSimpleR: {
        request: {
            name: 'Baba Jaba',
            value: 10
        }
    },
    plainSimpleWithOptionalsR: {
        request: {
            name: 'Baba Jaba',
            //value: 10
        }
    },
    plainSimpleAllOptionalsR: {
        request: {
            //name: 'Baba Jaba',
            //value: 10
        }
    },
    //wrong
    plainSimpleMoreFieldsW: {
        request: {
            name: 'Baba Jaba',
            value: 10,
            extra: undefined
        }
    },
    plainSimpleW: {
        request: {
            name: 'Baba Jaba',
            value: '10'
        }
    },
    plainSimpleWithOptionalsW: {
        request: {
            name: 10,
            //value: 10
        }
    },
    plainSimpleAllOptionalsW: {
        request: {
            //name: 'Baba Jaba',
            value: '10'
        }
    },
};

module.exports = {
    apiSchemes,
    apiMocks
};