describe("Bowling Game", function () {
    it("should create the first frame with 1 and 1 pin and return 2", function () {
        var bowling = new BowlingGame();
        var actual = bowling.createFrame(1, 1);

        expect(actual).toEqual(2);
    });
});