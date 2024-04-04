import { Guid } from "guid-ts";
import { Action } from "./types/actions";
import { PlayfieldManager } from "./managers/playfield-manager";
import { PostTurnEvent } from "./types/post-turn-event";
export declare class Blazing8s {
    playfield: PlayfieldManager;
    private turnManager;
    private deckManager;
    private playerDataManager;
    private hasGameStarted;
    private isWildCardInPlay;
    private wildCardPlayer;
    private isGameOver;
    constructor();
    /**
     *
     * @param player the player who wants to player
     * @returns the registering players starting deck OR null if the game has already started
     */
    register(playerName: string): Guid | null;
    /**
     *
     * @returns the guid for the first player to have a turn
     */
    start(): Guid;
    reset(): void;
    do<ActionType extends Action>(action: ActionType): PostTurnEvent | null;
    private handlePlusOne;
    private handleSwapHands;
    private handleChangeDirection;
    private handleSkipNextUser;
    private handleWildCard;
    private handleWildCardPostSelection;
}
