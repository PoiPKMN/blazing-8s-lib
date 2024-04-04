import { Card } from "../types/cards/card";
import { SpecialCard } from "../types/cards/special-card";
export declare const isSpecialCard: (card: Card) => card is SpecialCard;
export declare const isNormalCard: (card: Card) => card is Card;
