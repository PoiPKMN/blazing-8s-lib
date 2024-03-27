import { PlayerName } from "./players/player-name";

export class Game {
  players!: PlayerName[];
  
  constructor(players?: PlayerName[]) {
    if (!!players?.length) {
      this.players = players;
    }
  }

  begin(): void {
    
  }

  registerPlayers(players: PlayerName[]): void {
    this.players.push(...players);
  }
}
