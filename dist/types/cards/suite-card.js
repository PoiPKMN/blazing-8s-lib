"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteCard = void 0;
const card_types_1 = require("./card-types");
const card_1 = require("./card");
const specials_1 = require("./specials");
class SuiteCard extends card_1.Card {
    constructor(color, rank) {
        super(color, rank, card_types_1.CardTypes.CARD, specials_1.Specials.NONE);
    }
}
exports.SuiteCard = SuiteCard;
