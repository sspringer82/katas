/*global describe, it, expect, fizzbuzz*/

describe("FizzBuzz", function () {
    "use strict";

    var map = [
        '', 1, 2, 'fizz', 4, 'buzz', 'fizz',
        7, 8, 'fizz', 'buzz', 11, 'fizz', 13,
        14, 'fizzbuzz', 16, 17, 'fizz', 19,
        'buzz', 'fizz', 22, 23, 'fizz', 'buzz',
        26, 'fizz', 28, 29, 'fizzbuzz'
    ], i, bindFunc,

        func = function (x, y) {
            expect(fizzbuzz(x)).toEqual(y);
        };

    for (i = 1; i < map.length; i += 1) {
        bindFunc = func.bind(this, i, map[i]);
        it("should return " + map[i] + " if " + i + " is provided", bindFunc);
    }
});
