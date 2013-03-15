describe("Bowling Game", function () {

    var bowling;

    beforeEach(function () {
        bowling = new BowlingGame();
    });

    it("should create the first frame with 1 and 1 pin and return 2", function () {
        var actual = bowling.createFrame(1, 1);

        expect(actual).toEqual(2);
    });

    it("should create a second frame with 2 and 5 and return 7", function() {
        var actual = bowling.createFrame(2,5);

        expect(actual).toEqual(7);
    });

    it("should return 9, if questioned for remaining frames if one frame is played already", function () {
        bowling.frames = 1;

        var actual = bowling.remainingFrames();
        expect(actual).toEqual(9);
    });

    it("should return 8, if questioned for remaining frames if two frames are played already", function () {
        bowling.frames = 2;

        var actual = bowling.remainingFrames();
        expect(actual).toEqual(8);
    });

    it("should return remainingFrames 9 if first frame is played", function () {
        bowling.createFrame(1,1);
        var actual = bowling.remainingFrames();

        expect(actual).toEqual(9);
    });

    it("should return remainingFrames 8 if second frame is played", function () {
        bowling.frames = 1;
        bowling.createFrame(2,5);

        var actual = bowling.remainingFrames();

        expect(actual).toEqual(8);
    });

    it("should count a strike as 10 points and end the frame", function () {
        var actual = bowling.createFrame('X');

        expect(actual).toEqual(10);
    });

    it("should handle an internal property for holding the resultset", function () {
        bowling.createFrame(2,4);
        var actual = bowling.results;
        var expected = [ { pin1:2, pin2:4, result:6 } ];

        expect(actual).toEqual(expected);
    });

    it("should maintain the internal property correctly to document the resultset", function () {
        bowling.createFrame(1,6);
        var actual = bowling.results;
        var expected = [ { pin1:1, pin2:6, result:7 } ];

        expect(actual).toEqual(expected);
    });

    it("should add a new object for a newly created frame in the game", function () {
        bowling.results = [ { pin1: 4, pin2: 3, result: 7} ];
        bowling.createFrame(3, 4);

        var actual = bowling.results;
        var expected = [ { pin1: 4, pin2: 3, result: 7}, { pin1: 3, pin2: 4, result: 7} ];

        expect(actual).toEqual(expected);
    });

    it ("should add 3 and 4 to result of a strike on the next frame - result 17 for the strike frame 7 for the current one", function () {
        bowling.createFrame('X');
        bowling.createFrame(3, 4);

        var actual = bowling.results;
        var expected = [{pin1: 'X', pin2: undefined, result: 17}, {pin1: 3, pin2: 4, result: 7}];
        expect(actual).toEqual(expected);
    });

    it ("should add 20 to the first strike if two more strikes happen", function () {
        bowling.createFrame('X');
        bowling.createFrame('X');
        bowling.createFrame('X');

        var actual = bowling.results;
        var expected = [
            {pin1: 'X', pin2: undefined, result: 30},
            {pin1: 'X', pin2: undefined, result: 20},
            {pin1: 'X', pin2: undefined, result: 10}];
        expect(actual).toEqual(expected);
    });

    it ("should return ten if a spare is thrown", function () {
        var result = bowling.createFrame(3, '/');

        expect(result).toEqual(10);
    });

    it ("should calculate 6 for the 2nd pin if 1st pin is 4 if a spare is thrown", function () {
        bowling.createFrame(4, "/");
        var results = bowling.results;

        var expected = [{pin1: 4, pin2: 6, result: 10}];

        expect(results).toEqual(expected);
    }) ;

    it ("should calculate 5 for the 2nd pin if 1st pin is 5 and spare is thrown", function () {
        bowling.createFrame(5, "/");
        var results = bowling.results;

        var expected = [{pin1: 5, pin2: 5, result: 10}];

        expect(results).toEqual(expected);
    }) ;
});