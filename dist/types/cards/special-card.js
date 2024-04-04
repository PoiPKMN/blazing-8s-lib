"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialCard = void 0;
const card_1 = require("./card");
const card_types_1 = require("./card-types");
class SpecialCard extends card_1.Card {
    constructor(color, rank, special) {
        super(color, rank, card_types_1.CardTypes.SPECIAL_CARD, special);
    }
}
exports.SpecialCard = SpecialCard;
