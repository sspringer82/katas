var Diamond = function () {
    "use strict";

    this.map = ['A', 'B', 'C'];
};

Diamond.prototype.run = function (target) {
    "use strict";

    var char = target;
    var result = [];


    for (var i = 0; i <= this.map.indexOf(target); i++) {
        result = this.buildLine(i, target, result);
    }
    for (var i = this.map.indexOf(target) -1; i >= 0; i--) {
        result = this.buildLine(i, target, result);
    }

    return result.join('\n');
};

Diamond.prototype.line = function (char, target) {
    "use strict";

    if (char === 'A') {
        return this.outerSpace(char, target) + 'A';
    }
    var position = this.map.indexOf(char);
    var innerSpace = (new Array(position * 2)).join(' ');
    return this.outerSpace(char, target) + char + innerSpace + char;
};

Diamond.prototype.outerSpace = function (char, target) {
    var charPosition = this.map.indexOf(char);
    var targetPostion = this.map.indexOf(target);
    var result = targetPostion - charPosition;
    return (new Array(result + 1)).join(' ');
};

Diamond.prototype.buildLine = function(index, target, result) {
    var retVal = result;

    var char = this.map[index];

    retVal.push(this.line(char, target));

    return retVal;
}


