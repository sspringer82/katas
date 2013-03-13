BowlingGame = function() {
    this.frames = 0;
    this.results = [];
};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    var result;

    if (pins1 === "X") {
        result = 10;
    } else {
        result = pins1 + pins2;
    }

    if (this.results[this.frames - 1] !== undefined) {
        if (this.results[this.frames - 1].pin1 == "X") {
            this.results[this.frames -1].result += result;
        }
    }

    this.results.push({ pin1:pins1, pin2:pins2, result: result });
    this.frames += 1;

    return result;
};

BowlingGame.prototype.remainingFrames = function () {
    return 10 - this.frames;
};