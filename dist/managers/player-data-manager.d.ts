import { Player } from "../types/players/player";
import { Guid } from "guid-ts";
import { Card } from "../types/cards/card";
export declare class PlayerDataManager {
    private dataForPlayers;
    /**
     * @returns the guid for the player
     */
    register(playerName: string): Guid;
    get(playerId: string): Player | undefined;
    getAllPlayers(): Player[];
    giveCardsToPlayer(playerId: string, cards: Card[]): void;
}
