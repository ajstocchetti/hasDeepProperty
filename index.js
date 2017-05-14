'use strict';

function hasDeepProperty(obj, propArray) {
    propArray = (Array.isArray(propArray)) ? propArray : [propArray];
    if(!propArray.length) return true; // no more properties to check

    // only check for properties if working with an object
    if(typeof obj !== 'object' || obj === null) return false;

    if(obj.hasOwnProperty(propArray[0])) {
        const nextObj = obj[propArray[0]];
        const nextList = propArray.slice(1, propArray.length);
        return hasDeepProperty(nextObj, nextList);
    } else return false;
}

module.exports = hasDeepProperty;
