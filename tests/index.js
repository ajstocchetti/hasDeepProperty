var chai = require('chai');
chai.should();
var hasDeepProperty = require('../index');

var undef;
var obj = {
    1: 'hello',
    a: {
        b: {
            c: {
                d: 'D'
            },
            e: 'E'
        },
        f: 'F',
        g: 'G',
    },
    h: 'H',
    'falsy': {
        zero: 0,
        false: false,
        null: null,
        undef: undef,
    },
};

function testHelper(desc, list, val) {
    it(desc, function() {
        hasDeepProperty(obj, list).should.equal(val);
    });
}
function trueHelper(desc, list) { return testHelper(desc, list, true); }
function falseHelper(desc, list) { return testHelper(desc, list, false); }

describe('function returns true when:', function() {
    trueHelper('single property exists', ['a']);
    trueHelper('single property exists and is passed in as keyname, not array', 'a');
    trueHelper('all properties exist', ['a', 'b', 'c', 'd']);
    trueHelper('property is a number', [1]);
    trueHelper('property exists and is zero', ['falsy', 'zero']);
    trueHelper('property exists and is false', ['falsy', 'false']);
    trueHelper('property exists and is null', ['falsy', 'null']);
    trueHelper('property exists and is undefinde', ['falsy', 'undef']);
    trueHelper('empty array is passed in', []);
});

describe('function returns false when:', function() {
    falseHelper('first property does not exist', ['x']);
    falseHelper('second property does not exist', ['a', 'z']);
    falseHelper('deep property does not exist', ['a', 'b', 'c', 'd', 'z']);
    falseHelper('property in the middle does not exist', ['a', 'b', 'c', 'z', 'd']);
    falseHelper('property in the middle does not exist', ['a', 'b', 'z', 'd']);
    falseHelper('search for the value, not the key', ['a', 'b', 'c', 'd', 'D']);
});

describe('when non-objects are provided', function() {
    var undef;
    var someObj = {
        undef: undef,
        isNull: null,
        zero: 0,
        str: '',
        func: function() {
            return { another: {} };
        },
    };
    it('returns false when property is undefined', function() {
        hasDeepProperty(someObj, ['undef', 'another']).should.equal(false);
    });
    it('returns false when property is null', function() {
        hasDeepProperty(someObj, ['isNull', 'another']).should.equal(false);
    });
    it('returns false when property is 0', function() {
        hasDeepProperty(someObj, ['zero', 'another']).should.equal(false);
    });
    it('returns false when property is empty string', function() {
        hasDeepProperty(someObj, ['str', 'toLocaleLowerCase']).should.equal(false);
    });
    it('returns false when property is a function', function() {
        hasDeepProperty(someObj, ['func', 'another']).should.equal(false);
    });
});
