function LEDDigits(number) {
    "use strict";

    this.number = number;

    this.numberMap = [
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
}

LEDDigits.prototype.digitalize = function (number) {
    "use strict";

    return this.numberMap[parseInt(number, 10)];
};

LEDDigits.prototype.parse = function (number) {
    "use strict";

    var numbers = number.toString(),
        i,
        j,
        result = [[], [], []],
        singleDigit;

    for (i = 0; i < numbers.length; i += 1) {
        singleDigit = this.digitalize(numbers[i]);
        for (j = 0; j < 3; j += 1) {
            result[j].push(singleDigit[j]);
        }
    }

    return result;
};

LEDDigits.prototype.toString = function () {
    "use strict";

    var result = [],
        i,
        parts;

    parts = this.parse(this.number);

    for (i = 0; i < 3; i += 1) {
        result[i] = parts[i].join(' ');
    }
    return result.join("\n");
};