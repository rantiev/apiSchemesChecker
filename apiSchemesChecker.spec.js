const checker = require('./apiSchemesChecker.js');
const schemes = require('./apiSchemes.js');

describe('One level requests tests', () => {

    describe('Simple requests with right scheme',() => {

        it('plainSimple check - not throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimple',
                    schemes.apiMocks.plainSimpleR.request
                );
            }).not.toThrow();
        });

        it('plainSimpleWithOptionals check - not throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleWithOptionals',
                    schemes.apiMocks.plainSimpleWithOptionalsR.request
                );
            }).not.toThrow();
        });

        it('plainSimpleAllOptionals check - not throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleAllOptionalsR.request
                );
            }).not.toThrow();
        });

    });
    describe('Simple requests with wrong scheme', () => {

        it('More fields than it needs - throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleMoreFieldsW.request
                );
            }).toThrow();
        });

        it('Wrong second field type - throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleW.request
                );
            }).toThrow();
        });

        it('Wrong first field type - throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleWithOptionalsW.request
                );
            }).toThrow();
        });

        it('Wrong optional field type - throws', () => {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleAllOptionalsW.request
                );
            }).toThrow();
        });

    });

});

describe('More levels requests tests', () => {

    describe('Multi level requests with right scheme', () => {
        it('two levels Simple check - not throws', () => {
            expect(() => {
                checker.checkRequest(
                    'levels2Simple',
                    schemes.apiMocks.levels2SimpleR.request
                );
            }).not.toThrow();
        });

        it('7 levels Simple check - not throws', () => {
            expect(() => {
                checker.checkRequest(
                    'levels7',
                    schemes.apiMocks.levels7R.request
                );
            }).not.toThrow();
        });
    });

    describe('Multi level requests with wrong scheme', () => {
        it('two levels Simple check - throws', () => {
            expect(() => {
                checker.checkRequest(
                    'levels2Simple',
                    schemes.apiMocks.levels2SimpleW.request
                );
            }).toThrow();
        });

        it('7 levels Simple check - throws', () => {
            expect(() => {
                checker.checkRequest(
                    'levels7',
                    schemes.apiMocks.levels7W.request
                );
            }).toThrow();
        });
    });

});

describe('Arrays with right scheme', () => {
    it('two arrays of strings and numbers', () => {
        expect(() => {
            checker.checkRequest(
                'arrays',
                {
                    listS: ['s1', 's2', 's3'],
                    listN: [1, 2, 3],
                }
            );
        }).not.toThrow();
    });

    it('two arrays of strings and numbers - absent property throw', () => {
        expect(() => {
            checker.checkRequest(
                'arrays',
                {
                    listS: ['s1', 's2', 's3']
                }
            );
        }).toThrow();
    });

    it('two arrays of strings and numbers - wrong array element type', () => {
        expect(() => {
            checker.checkRequest(
                'arrays',
                {
                    listS: ['s1', 's2', 3],
                    listN: [1, '2', 3],
                }
            );
        }).toThrow();
    });

    it('two arrays of strings and numbers - wrong array element type', () => {
        expect(() => {
            checker.checkRequest(
                'arrays',
                {
                    listS: ['s1', 's2', 3],
                    listN: [1, '2', 3],
                }
            );
        }).toThrow();
    });

    it('Mixed types in array', () => {
        expect(() => {
            checker.checkRequest(
                'arraysComplex',
                {
                    listSN: ['s', 1, 's', 's', 2],
                    listNS: [3, 's'],
                }
            );
        }).not.toThrow();
    });

    it('Mixed types in array - wrong', () => {
        expect(() => {
            checker.checkRequest(
                'arraysComplex',
                {
                    listSN: ['s', '1', 's', 's', 2],
                    listNS: [3, 's'],
                }
            );
        }).toThrow();
    });
});

describe('Real word examples', () => {
    it('Should pass right scheme', () => {
        expect(() => {
            checker.checkRequest(
                'books',
                {
                    author: {
                        nameFirst: 'namFirst',
                        nameLast: 'nameLast',
                    },
                    categories: ['Cat1', 'Cat2', 'Cat3'],
                    years: [2010, 2011],
                    limit: 10,
                    address: {
                        street: 'Wallstreet',
                        houseNumber: 12
                    }
                }
            );
        }).not.toThrow();
    });

    it('Should pass right scheme with optional params', () => {
        expect(() => {
            checker.checkRequest(
                'books',
                {
                    author: {
                        nameFirst: 'namFirst',
                        nameLast: 'nameLast',
                    },
                    categories: ['Cat1', 'Cat2', 'Cat3'],
                    years: [2010, 2011],
                    limit: 10
                }
            );
        }).not.toThrow();
    });

    it('Should throw scheme with wrong optional params', () => {
        expect(() => {
            checker.checkRequest(
                'books',
                {
                    author: {
                        nameFirst: 'namFirst',
                        nameLast: 'nameLast',
                    },
                    categories: ['Cat1', 'Cat2', 'Cat3'],
                    years: [2010, 2011],
                    limit: '10'
                }
            );
        }).toThrow();
    });

    it('Should throw wrong scheme', () => {
        expect(() => {
            checker.checkRequest(
                'books',
                {
                    author: {
                        nameFirst: 'namFirst',
                        nameLast: 'nameLast',
                    },
                    categories: [10, 20],
                    years: [2010, 2011],
                    address: {
                        street: 'Wallstreet',
                        houseNumber: 12
                    }
                }
            );
        }).toThrow();
    });
});