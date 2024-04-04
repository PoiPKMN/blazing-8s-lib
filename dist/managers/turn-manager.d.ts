import { Player } from "../types/players/player";
export declare class TurnManager {
    get currentPlayer(): Player;
    get nextPlayer(): Player;
    private _isOrderReversed;
    get isOrderReversed(): boolean;
    private order;
    private currentIndex;
    /**
     * @returns the first player in the order
     */
    initializeOrder(players: Player[]): Player;
    /**
     * @returns true if the order is reversed after the method block
     */
    changeDirection(): boolean;
    /**
     * @returns the current player after the iteration has happened
     */
    next(): Player;
    private getNextIndex;
}
