import { Player } from "../types/players/player";
import { Guid } from "guid-ts";
import { PlayerData } from "../types/player-data";
import { Card } from "../types/cards/card";

export class PlayerDataManager {
  private dataForPlayers: Map<string, PlayerData> = new Map<string, PlayerData>();

  /**
   * @returns the guid for the player
   */
  register(playerName: string): Guid {
    const player = new Player(playerName);
    this.dataForPlayers.set(player.id.toString(), { player });
    return player.id;
  }

  get(playerId: string): Player | undefined {
    return this.dataForPlayers.get(playerId)?.player;
  }
  
  getAllPlayers(): Player[] {
    let players: Player[] = [];
    this.dataForPlayers.forEach((player) => {
      players.push(player.player);
    });

    return players;
  }

  giveCardsToPlayer(playerId: string, cards: Card[]): void {
    const playerData = this.dataForPlayers.get(playerId);
    if (!!playerData) {
      cards.forEach((card) => {
        playerData.player.receiveCard(card);
      });
    }
  }
}
