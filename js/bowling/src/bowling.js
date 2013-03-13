BowlingGame = function() {
    this.frames = 0;
    this.results = [];
};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    this.frames += 1;

    if (pins1 === "X") {
        return 10;
    }
    this.results = [ { pin1:pins1, pin2:pins2, result:pins1 + pins2 } ];
    return pins1 + pins2;
};

BowlingGame.prototype.remainingFrames = function () {
    return 10 - this.frames;
};