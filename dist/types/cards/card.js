"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const guid_ts_1 = require("guid-ts");
class Card {
    constructor(color, rank, type, special) {
        this.id = guid_ts_1.Guid.newGuid();
        this.color = color;
        this.rank = rank;
        this.type = type;
        this.special = special;
    }
}
exports.Card = Card;
