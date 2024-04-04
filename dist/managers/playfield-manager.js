"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayfieldManager = void 0;
const lodash_1 = require("lodash");
class PlayfieldManager {
    constructor() {
        this.playfield = [];
    }
    peek() {
        return (0, lodash_1.last)(this.playfield);
    }
    acceptCard(card) {
        this.playfield.push(card);
    }
}
exports.PlayfieldManager = PlayfieldManager;
