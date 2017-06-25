const checker = require('./apiSchemesChecker.js');
const schemes = require('./apiSchemes.js');

describe('One level requests tests', function() {

    describe('Simple requests with right scheme', function() {

        it('plainSimple check - not throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimple',
                    schemes.apiMocks.plainSimpleR.request
                );
            }).not.toThrow();
        });

        it('plainSimpleWithOptionals check - not throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleWithOptionals',
                    schemes.apiMocks.plainSimpleWithOptionalsR.request
                );
            }).not.toThrow();
        });

        it('plainSimpleAllOptionals check - not throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleAllOptionalsR.request
                );
            }).not.toThrow();
        });

    });
    describe('Simple requests with wrong scheme', function() {

        it('More fields than it needs - throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleMoreFieldsW.request
                );
            }).toThrow();
        });

        it('Wrong second field type - throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleW.request
                );
            }).toThrow();
        });

        it('Wrong first field type - throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleWithOptionalsW.request
                );
            }).toThrow();
        });

        it('Wrong optional field type - throws', function() {
            expect(() => {
                checker.checkRequest(
                    'plainSimpleAllOptionals',
                    schemes.apiMocks.plainSimpleAllOptionalsW.request
                );
            }).toThrow();
        });

    });

});

describe('Two level requests tests', function() {

    describe('Simple requests with right scheme', function() {

    });

    describe('Simple requests with wrong scheme', function() {

    });

});

describe('Three level requests tests', function() {

    describe('Simple requests with right scheme', function() {

    });

    describe('Simple requests with wrong scheme', function() {

    });

});

describe('Real word examples', function() {

});