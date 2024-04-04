"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNormalCard = exports.isSpecialCard = void 0;
const card_types_1 = require("../types/cards/card-types");
const isSpecialCard = (card) => card.type === card_types_1.CardTypes.SPECIAL_CARD;
exports.isSpecialCard = isSpecialCard;
const isNormalCard = (card) => card.type === card_types_1.CardTypes.CARD;
exports.isNormalCard = isNormalCard;
