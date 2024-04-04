import { Card } from "../types/cards/card";
export declare class DeckManager {
    deck: Card[];
    constructor();
    draw(): Card;
    dealHand(): Card[];
}
