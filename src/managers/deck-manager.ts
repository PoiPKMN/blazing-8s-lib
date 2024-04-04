import { shuffle } from "lodash";
import { getCardList } from "../assets/cards-list";
import { Card } from "../types/cards/card";

export class DeckManager {
  deck: Card[];

  constructor() {
    this.deck = shuffle(getCardList());
  }

  draw(): Card {
    return this.deck.pop() as Card;
  }

  dealHand(): Card[] {
    return new Array(5).fill({})
      .map(this.draw);
  }
}
