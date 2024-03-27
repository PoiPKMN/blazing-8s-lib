import { Card } from "../cards/card";
import { Colors } from "../cards/color";
import { Rank } from "../cards/rank";
import { PlayerController } from "../controllers/player/player-controller";
import { PlayerName } from "./player-name";

export class Player {
  name: PlayerName;
  private hand: Card[] = [];
  private controller: PlayerController;

  constructor(name: PlayerName, controller: PlayerController) {
    this.name = name;
    this.controller = controller;
  }

  receiveCard(card: Card): void {
    this.hand.push(card);
  }

  chooseCard(): Card {
    return new Card(Colors.BLUE, Rank.ONE);
  }
}
