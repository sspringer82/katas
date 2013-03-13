BowlingGame = function() {};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    return pins1 + pins2;
};

BowlingGame.prototype.remainingFrames = function () {
    return 9;
};