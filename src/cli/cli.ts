import { readline } from "./readline";
import { writeline } from "./writeline";
import { NoValidPlayersError } from "./errors/no-valid-players-error";
import { Game } from "../game/game";

export class Cli {
  game = new Game();
  
  async run(): Promise<void> {
    writeline('WELCOME TO POI\'S BLAZING 8\'S');

    // get users names and count
    const playersStr = await readline('Please enter all team member names(separated by spaces)');
    const players: string[] = playersStr.split(' ');
    if (!players?.length) {
      throw new NoValidPlayersError();
    }

    // start the game
    this.game.begin();
  }
}
