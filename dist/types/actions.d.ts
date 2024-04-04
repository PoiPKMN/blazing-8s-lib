import { Card, Player } from ".";
export declare enum Actions {
    DRAW = 0,
    SKIP = 1,
    PLAY_CARD = 2
}
export interface Action {
    type: Actions;
    player: Player;
    cardPlayed: Card;
}
