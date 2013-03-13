BowlingGame = function() {
    this.frames = 0;
};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    this.frames += 1;

    if (pins1 === "X") {
        return 10;
    }

    return pins1 + pins2;
};

BowlingGame.prototype.remainingFrames = function () {
    return 10 - this.frames;
};