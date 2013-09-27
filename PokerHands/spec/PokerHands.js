/*global describe, it, expect, jasmine, PokerHands*/
// spec

describe("Poker Hands", function () {
    "use strict";

    it("should be able to create a new card deck", function () {
        var hand = new PokerHands('2H 3D 5S 9C KD');

        expect(hand).toEqual(jasmine.any(PokerHands));
    });

    var helper = function (deck, cb) {
        var hand = new PokerHands(),
            cards = hand.splitDeck(deck);
        return hand[cb](cards);
    };

    it("should be able to detect highest card", function () {
        var result = helper('2H 3D 5S 9C KD', 'getHighCard');

        expect(result).toEqual(["K", [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C']]]);
    });

    it("should be able to detect another highest card", function () {
        var result = helper('2H 3D AS 9C KD', 'getHighCard');

        expect(result).toEqual(["A", [[2, 'H'], [3, 'D'], [9, 'C'], [13, 'D']]]);
    });

    it("should split the deck correctly into a array", function () {
        var hand = new PokerHands();

        var xpeced = [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C'], [13, 'D']];

        expect(hand.splitDeck('2H 3D 5S 9C KD')).toEqual(xpeced);
    });

    it("should detect a pair", function () {
        var pair = helper('2H 3D AS 3C KD', 'getPair');

        expect(pair).toEqual(["3", [[2, 'H'], [14, 'S'], [13, 'D']]]);
    });

    it("should detect another pair", function () {
        var pair = helper('2H 3D AS 2C KD', 'getPair');

        expect(pair).toEqual(["2", [[3, 'D'], [14, 'S'], [13, 'D']]]);
    });

    it("should detect a pair of kings", function () {
        var pair = helper('KH 3D AS 2C KD', 'getPair');

        expect(pair).toEqual(["K", [[3, 'D'], [14, 'S'], [2, 'C']]]);
    });

    it("should detect two pairs", function () {
        var doublePair = helper('KH 2D AS 2C KD', 'getDoublePair');

        expect(doublePair).toEqual([["2", "K"], [[14, 'S']]]);
    });

    it("should detect two another pairs", function () {
        var doublePair = helper('KH 2D AS AC KD', 'getDoublePair');

        expect(doublePair).toEqual([["K", "A"], [[2, 'D']]]);
    });

    it("should detect three of a kind", function () {
        var threeOfAKind = helper('KH KD KS 2D 3H', 'getThreeOfAKind');

        expect(threeOfAKind).toEqual(["K", [[2, 'D'], [3, 'H']]]);
    });

    it("should detect another three of a kind", function () {
        var threeOfAKind = helper('3H KD 3S 2D 3H', 'getThreeOfAKind');

        expect(threeOfAKind).toEqual(["3", [[13, 'D'], [2, 'D']]]);
    });

});