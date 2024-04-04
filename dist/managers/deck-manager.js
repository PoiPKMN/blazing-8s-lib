"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckManager = void 0;
const lodash_1 = require("lodash");
const cards_list_1 = require("../assets/cards-list");
class DeckManager {
    constructor() {
        this.deck = (0, lodash_1.shuffle)((0, cards_list_1.getCardList)());
    }
    draw() {
        return this.deck.pop();
    }
    dealHand() {
        return new Array(5).fill({})
            .map(this.draw);
    }
}
exports.DeckManager = DeckManager;
