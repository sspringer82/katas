// source

var PokerHands = (function () {
    "use strict";

    var PokerHands = function () {};

    PokerHands.prototype.splitDeck = function (deck) {
        var cards = deck.split(" "),
            i,
            tmp;

        for (i = 0; i < cards.length; i += 1) {
            tmp = cards[i];
            cards[i] = [this.map[tmp[0]], tmp[1]];
        }

        return cards;
    };

    PokerHands.prototype.map = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "T": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };

    PokerHands.prototype.getHighCard = function (deck) {
        var highCard = 0,
            i,
            index,
            result;
        for (i = 0; i < deck.length; i += 1) {
            if (deck[i][0] > highCard) {
                highCard = deck[i][0];
            }
        }

        index = this.findIndexByValue(highCard, deck);
        result = this.removeIndex(index, deck);

        return [this.translate(highCard), result];

    };

    PokerHands.prototype.findIndexByValue = function (val, deck) {
        var i,
            result = [];
        for (i = 0; i < deck.length; i += 1) {
            if (deck[i][0] === val) {
                result.push(i);
            }
        }
        return result;
    };

    PokerHands.prototype.removeIndex = function (indexes, deck) {
        var i;
        for (i = indexes.length - 1; i >= 0; i -= 1) {
            deck.splice(indexes[i], 1);
        }
        return deck;
    };

    PokerHands.prototype.getPair = function (deck) {
        return this.getCardsOfSameKind(deck, 2);
    };

    PokerHands.prototype.translate = function (index) {
        for (var i in this.map) {
            if (this.map[i] === index) {
                return i;
            }
        }
        return false;
    };

    PokerHands.prototype.getDoublePair = function (deck) {
        var pair1,
            pair2;

        pair1 = this.getPair(deck);
        pair2 = this.getPair(pair1[1]);

        return [ [pair1[0], pair2[0]], pair2[1]];
    };

    PokerHands.prototype.getCardsOfSameKind = function (deck, number) {
        var result = [],
            retVal,
            index,
            i;

        for (i = 0; i < deck.length; i += 1) {
            if (result[deck[i][0]]) {
                result[deck[i][0]] += 1;
            } else {
                result[deck[i][0]] = 1;
            }
        }

        for (i = 0; i < result.length; i += 1) {
            if (result[i] === number) {
                retVal = i;
                break;
            }
        }

        index = this.findIndexByValue(i, deck);
        result = this.removeIndex(index, deck);
        return [this.translate(i), result];
    };


    PokerHands.prototype.getThreeOfAKind = function (deck) {
        return this.getCardsOfSameKind(deck, 3);
    };

    return PokerHands;

}());
