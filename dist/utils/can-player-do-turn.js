"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canPlayerDoTurn = void 0;
const actions_1 = require("../types/actions");
const canPlayerDoTurn = (action, topCard, player, wildCardPlayer) => (doesCardMatch(action, topCard) || isDrawOrSkip(action, topCard)) &&
    isPlayerWildcardPlayer(player, wildCardPlayer);
exports.canPlayerDoTurn = canPlayerDoTurn;
const doesCardMatch = (action, topCard) => {
    var _a, _b;
    return ((_a = action.cardPlayed) === null || _a === void 0 ? void 0 : _a.color) === topCard.color ||
        ((_b = action.cardPlayed) === null || _b === void 0 ? void 0 : _b.rank) === topCard.rank;
};
const isDrawOrSkip = (action, topCard) => action.type === actions_1.Actions.DRAW ||
    action.type === actions_1.Actions.SKIP;
const isPlayerWildcardPlayer = (player, wildCardPlayer) => !wildCardPlayer || (!!wildCardPlayer && player.id === wildCardPlayer.id);
