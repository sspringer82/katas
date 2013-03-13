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
});