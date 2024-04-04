import { Guid } from "guid-ts";
import { Card } from "../cards";
export declare class Player {
    readonly id: Guid;
    readonly name: string;
    hand: Card[];
    constructor(name: string);
    swapHands(hand: Card[]): Card[];
    receiveCard(card: Card): void;
    chooseCard(): Promise<Card>;
}
