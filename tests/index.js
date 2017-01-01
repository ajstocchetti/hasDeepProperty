var chai = require('chai');
chai.should();
var hasDeepProperty = require('../index');

var obj = {
    '1': 'hello',
    a: {
        b: {
            c: {
                d: 0
            },
            e: 1
        },
        f: 2,
        g: 3,
    },
    h: 4
};
describe('when all properties exist', function() {
    it('returns true', function() {
        hasDeepProperty(obj, ['a', 'b', 'c', 'd']).should.equal(true);
    });
});
