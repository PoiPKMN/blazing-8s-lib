"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnManager = void 0;
const lodash_1 = require("lodash");
class TurnManager {
    constructor() {
        this._isOrderReversed = false;
        this.order = [];
        this.currentIndex = 0;
    }
    get currentPlayer() {
        return (0, lodash_1.get)(this.order, this.currentIndex);
    }
    get nextPlayer() {
        return (0, lodash_1.get)(this.order, this.getNextIndex());
    }
    get isOrderReversed() {
        return this._isOrderReversed;
    }
    /**
     * @returns the first player in the order
     */
    initializeOrder(players) {
        this.order = (0, lodash_1.shuffle)(players);
        return (0, lodash_1.head)(this.order);
    }
    /**
     * @returns true if the order is reversed after the method block
     */
    changeDirection() {
        this._isOrderReversed = !this.isOrderReversed;
        return this._isOrderReversed;
    }
    /**
     * @returns the current player after the iteration has happened
     */
    next() {
        this.currentIndex = this.getNextIndex();
        return this.currentPlayer;
    }
    getNextIndex() {
        var _a, _b;
        if (!this._isOrderReversed) {
            return (this.currentIndex === ((_a = this.order) === null || _a === void 0 ? void 0 : _a.length)) ?
                0 :
                this.currentIndex + 1;
        }
        else {
            return (this.currentIndex === 0) ?
                (_b = this.order) === null || _b === void 0 ? void 0 : _b.length :
                this.currentIndex - 1;
        }
    }
}
exports.TurnManager = TurnManager;
