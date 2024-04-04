import { last } from "lodash";
import { Card } from "../types/cards/card";

export class PlayfieldManager {
  playfield: Card[] = [];

  peek(): Card {
    return last(this.playfield) as Card;
  }

  acceptCard(card: Card): void {
    this.playfield.push(card);
  }
}
