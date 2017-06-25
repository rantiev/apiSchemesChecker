const _ = require('lodash');
let apiSchemes = require('./apiSchemes.js');
apiSchemes = apiSchemes.apiSchemes;

const optionalRegexp = /^\[.*]$/;

const checkRequest = function (requestName, requestFields) {
    if (!_.has(apiSchemes, `${requestName}.request`)) {
        throw new Error(`There is no request registered: ${requestName}`);
    }

    const scheme = apiSchemes[requestName].request;

    checkRequestProps(scheme, requestFields);
};

/*const checkResponse = function (requestName, requestBody) {

};*/

function checkRequestProps (obj1, obj2, path) {

    const o1Keys = _.keysIn(obj1);
    const o2Keys = _.keysIn(obj2);
    const pPath = path ? `in ${path}.` : '';

    if (o2Keys.length > o1Keys.length) {
        throw new Error(`Request object contains too many fields: ${o1Keys.toString()} - ` +
        `${o2Keys.toString()} ${pPath}`);
    }

    for (let p in obj1) {
        if (!obj1.hasOwnProperty(p)) {
            continue;
        }

        const cp = obj1[p];
        const pp = path ? path + '.' : '';

        if (_.isString(cp)) {
            let type = cp;
            const isOptional = optionalRegexp.test(cp);

            if (isOptional) {
                type = type.slice(1, -1);
            } else if (!obj2.hasOwnProperty(p)) {
                throw new Error(`There is no required request property: ${pp}${p}`);
            }

            if (!_.isUndefined(obj2[p]) && !_[`is${type}`](obj2[p])) {
                throw new Error(`There is wrong property request type: ${pp}${p}, ` +
                `should be ${type} but is ${typeof obj2[p]}`);
            }

        } else if (_.isArray(cp)) {

            if (cp.length === 1) {

                if (!_.isString(cp[0]) && !_.isNumber(cp[0])) {
                    throw new Error(`Only strings and numbers types allowed as array 
                    elements: ${pp}${p}`);
                }

                let type = cp[0].slice(1, -1);
                const isOptional = optionalRegexp.test(cp[0]);

                if (!obj2[p].length && !isOptional) {
                    throw new Error(`There is no required request property in: ${pp}${p}`);
                }

                obj2[p].forEach(function (item) {
                    if (!_[`is${type}`](item)) {
                        throw new Error(`There is wrong property request type in: ${pp}${p}, 
                        should be ${type} but ${typeof item}`);
                    }
                });

                continue;
            }

            cp.forEach((item, i) => {
                if (!_.isString(item) && !_.isNumber(item)) {
                    throw new Error(`Only strings and numbers types allowed as array 
                    elements: ${pp}${p}`);
                }

                let type = item.slice(1, -1);
                const isOptional = optionalRegexp.test(item);

                if (!isOptional && !obj2[p][i]) {
                    throw new Error(`There is no required request property in: ${pp}${p}`);
                }

                if (_.isUndefined(obj2[p][i]) && !_[`is${type}`](obj2[p][i])) {
                    throw new Error(`There is wrong property request type in: ${pp}${p}, 
                        should be ${type} but ${typeof item}`);
                }

            });

        } else if (_.isObject(cp)) {
            checkRequestProps (cp, obj2[p], path);
        } else {
            throw new Error(`Not supported field type: ${pp}${p}`);
        }
    }

}

module.exports = {
    checkRequest,
    //checkResponse,
};