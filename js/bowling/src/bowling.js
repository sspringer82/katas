BowlingGame = function() {
    this.frames = 0;
    this.results = [];
};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    var result;
    this.frames += 1;

    if (pins1 === "X") {
        result = 10;
    } else {
        result = pins1 + pins2;
    }

    this.results = [ { pin1:pins1, pin2:pins2, result: result } ];
    return result;
};

BowlingGame.prototype.remainingFrames = function () {
    return 10 - this.frames;
};