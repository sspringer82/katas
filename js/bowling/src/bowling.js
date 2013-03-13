BowlingGame = function() {
    this.frames = 0;
};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    return pins1 + pins2;
};

BowlingGame.prototype.remainingFrames = function () {
    return 10 - this.frames;
};