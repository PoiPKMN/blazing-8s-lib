"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const lodash_1 = require("lodash");
const cards_list_1 = require("../../assets/cards-list");
class Deck {
    constructor() {
        this.cards = [];
        this.cards = (0, cards_list_1.getCardList)();
    }
    /**
     * Removes a card from the top of the deck, removes it and returns it.
     * @returns the Card that was drawn
     */
    draw() {
        const [firstCard, ...restOfDeck] = this.cards;
        this.cards = restOfDeck;
        return firstCard;
    }
    shuffle() {
        this.cards = (0, lodash_1.shuffle)(this.cards);
    }
}
exports.Deck = Deck;
