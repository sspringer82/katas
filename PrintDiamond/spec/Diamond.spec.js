/*global describe, it, expect, Diamond, beforeEach*/

describe("Diamond", function () {
    "use strict";

    var diamond;

    beforeEach(function () {
        diamond = new Diamond();
    });

    describe("run", function () {
        it("should return A if A is given", function () {
            expect(diamond.run('A')).toEqual('A');
        });

        it("should return B B if B ist given", function () {
            expect(diamond.run('B')).toEqual(' A\nB B\n A');
        });

    });
    describe("line", function () {
        it("should return line for character A", function () {
            expect(diamond.line('A', 'A')).toEqual('A');
        });
        it("should return line for character B", function () {
            expect(diamond.line('B', 'B')).toEqual('B B');
        });
        it("should return line for character C", function () {
            expect(diamond.line('C', 'C')).toEqual('C   C');
        });
        it("should return line for character A and Target B", function () {
            expect(diamond.line('A', 'B')).toEqual(' A');
        });
    });
    describe("outer space", function () {
        it("should return one space if character is A and target is B", function () {
            expect(diamond.outerSpace('A', 'B')).toEqual(' ');
        });
        it("should return two spaces if character is A and target is C", function () {
            expect(diamond.outerSpace('A', 'C')).toEqual('  ');
        });
    });

    describe("build line", function () {
        it("should build a line array if index 0 is given", function () {
            var actual = diamond.buildLine(0, 'A', []);
            var expected = ['A'];
            expect(actual).toEqual(expected);
        });
        it("should build a line array if index 0 is given", function () {
            var actual = diamond.buildLine(0, 'B', []);
            var expected = [' A'];
            expect(actual).toEqual(expected);
        });
        it("should build a line array if index 1 and target C is given", function () {
            var actual = diamond.buildLine(1, 'C', ['  A']);
            var expected = ['  A', ' B B'];
            expect(actual).toEqual(expected);
        });

    });
});