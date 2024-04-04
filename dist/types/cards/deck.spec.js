"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
describe('Deck', () => {
    it('deck creation and drawing two cards', () => {
        const deck = new deck_1.Deck();
        const cardOne = deck.draw();
        const cardTwo = deck.draw();
        const cardThree = deck.draw();
        expect(cardOne.constructor.name).toBe('Card');
        expect(cardOne.color).toBeTruthy();
        expect(cardOne.rank).toBeTruthy();
        expect(cardTwo.constructor.name).toBe('Card');
        expect(cardTwo.color).toBeTruthy();
        expect(cardTwo.rank).toBeTruthy();
        expect(cardThree.constructor.name).toBe('Card');
        expect(cardThree.color).toBeTruthy();
        expect(cardThree.rank).toBeTruthy();
    });
});
