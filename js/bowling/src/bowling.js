BowlingGame = function() {
    this.frames = 0;
    this.results = [];

    this.strike = [];
    this.spare = [];
};

BowlingGame.prototype.createFrame = function(pins1, pins2) {
    var result;

    if (this.frames > 8) {
        var lastStrike = false;
        for (var i = 0; i < this.strike.length; i++) {
            if (this.strike[i].pin1 === undefined) {
                lastStrike = true;
            }
        }

        if (!lastStrike) {
            throw new Error('Too many Frames');
        }
    }

    if (this.frames >= 10) {
        throw new Error('Too many Frames');
    }

    if (pins2 === "-") {
        pins2 = 0;
    }

    if (pins1 === "-") {
        pins1 = 0;
    }

    // differ between stike and spare
    if (pins2 === "/") {
        this.spare.push({id: this.frames, result: 10, pin1: undefined});
        pins2 = 10 - pins1;
    }

    for (var i = 0; i < this.spare.length; i++) {
        if (this.spare[i].pin1 === undefined && this.results[this.spare[i].id] !== undefined) {
            this.results[this.spare[i].id].result += pins1;
            this.spare[i].pin1 = pins1;
        }
    }

    if (this.frames === 10) {
        pins1 = pins1 === "X" ? 10 : pins1;
        pins2 = pins2 === "X" ? 10 : pins2;
    }

    for (var i = 0; i < this.strike.length; i++) {
        if (this.strike[i].pin1 === undefined && pins1 === 'X') {
            this.strike[i].pin1 = 10;
            this.strike[i].result += 10;
            this.results[this.strike[i].id].result = this.strike[i].result;
        } else if (this.strike[i].pin1 === undefined) {
            this.strike[i].pin1 = pins1;
            this.strike[i].pin1 = pins2;
            this.strike[i].result += pins1 + pins2;
            this.results[this.strike[i].id].result = this.strike[i].result;
        } else if (this.strike[i].pin2 === undefined && pins1 === 'X') {
            this.strike[i].pin1 = 10;
            this.strike[i].result += 10;
            this.results[this.strike[i].id].result = this.strike[i].result;
        } else if (this.strike[i].pin2 === undefined) {
            this.strike[i].pin1 = pins1;
            this.strike[i].result += pins1;
            this.results[this.strike[i].id].result = this.strike[i].result;
        }
    }



    if (pins1 === "X") {
        result = 10;
        this.strike.push({id: this.frames, result: 10, pin1: undefined, pin2: undefined});
    } else {
        result = pins1 + pins2;
    }

    this.results.push({ pin1:pins1, pin2:pins2, result: result });

    if (this.frames == 9) {
        debugger;
    }

    this.frames += 1;

    return result;
};

BowlingGame.prototype.remainingFrames = function () {
    return 10 - this.frames;
};