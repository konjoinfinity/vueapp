// describe('hooks', function () {
//     before(function () {
//         // runs once before the first test in this block
//         console.log("Before")
//     });

//     after(function () {
//         // runs once after the last test in this block
//         console.log("After")
//     });

//     beforeEach(function () {
//         // runs before each test in this block
//         console.log("Before Each")
//     });

//     afterEach(function () {
//         // runs after each test in this block
//         console.log("After Each")
//     });

//     // test cases
// });

const chai = require('chai')
var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

it('double done', function (done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    // setImmediate(done);
});

// describe('User', function () {
//     describe('#save()', function () {
//         it('should save without error', function (done) {
//             var user = new User('Luna');
//             user.save(function (err) {
//                 if (err) done(err);
//                 else done();
//             });
//         });
//     });
// });

// describe('User', function () {
//     describe('#save()', function () {
//         it('should save without error', function (done) {
//             var user = new User('Luna');
//             user.save(done);
//         });
//     });
// });

// Connect to mongoose (clear and write data)

// beforeEach(function () {
//     return db.clear().then(function () {
//         return db.save([tobi, loki, jane]);
//     });
// });

// describe('#find()', function () {
//     it('respond with matching records', function () {
//         return db.find({ type: 'User' }).should.eventually.have.length(3);
//     });
// });

// describe('Array', function () {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             [1, 2, 3].indexOf(5).should.equal(-1);
//             [1, 2, 3].indexOf(0).should.equal(-1);
//         });
//     });
// });

describe('my suite', () => {
    it('my test', () => {
        // should set the timeout of this test to 1000 ms; instead will fail
        // this.timeout(1000);
        assert.ok(true);
    });
});

var browser = require('browser')
describe('retries', function () {
    this.retries(1);
    browser.browse('https://konjomeet.herokuapp.com/', function (err, out) {
        !err ? console.log(out.result) : console.log(err)
    });
});


