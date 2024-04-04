import { Card } from "../types/cards/card";
export declare class PlayfieldManager {
    playfield: Card[];
    peek(): Card;
    acceptCard(card: Card): void;
}
