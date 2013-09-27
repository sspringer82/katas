/*global describe, it, expect, LEDDigits */
describe("LEDDigits", function () {
    "use strict";

    var numberExpectationHelper = function (number, expectation) {
        var ledDigits = new LEDDigits();
        expect(ledDigits.digitalize(number)).toEqual(expectation);
    },
        numberMap = [
            [' _ ', '| |', '|_|'], // 0
            ['   ', '  |', '  |'], // 1
            [' _ ', ' _|', '|_ '], // 2
            [' _ ', ' _|', ' _|'], // 3
            ['   ', '|_|', '  |'], // 4
            [' _ ', '|_ ', ' _|'], // 5
            [' _ ', '|_ ', '|_|'], // 6
            [' _ ', '  |', '  |'], // 7
            [' _ ', '|_|', '|_|'], // 8
            [' _ ', '|_|', '  |']  // 9
        ];

    it("should create a new object on initialization", function () {
        var ledDigits = new LEDDigits();
        expect(ledDigits).toBeTruthy();
    });

    it("should return the correct string representation for digits 0-9", function () {
        var i;
        for (i = 0; i <= 1; i += 1) {
            numberExpectationHelper(i, numberMap[i]);
        }
    });

    it("should return string representation of 910, if constructor and to string are used", function() {
        var expectation = " _       _ \n|_|   | | |\n  |   | |_|",
            ledDigits = new LEDDigits(910);
        expect(ledDigits.toString()).toEqual(expectation);
    });
});