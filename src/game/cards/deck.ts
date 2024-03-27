import { shuffle } from "lodash";
import { Card } from "./card";
import { getCardList } from "./cards-list";

export class Deck {
  private cards: Card[] = [];

  constructor() {
    this.cards = getCardList();
  }

  /**
   * Removes a card from the top of the deck, removes it and returns it.
   * @returns the Card that was drawn
   */
  draw(): Card {
    const [ firstCard, ...restOfDeck ] = this.cards;
    this.cards = restOfDeck;
    return firstCard;
  }

  shuffle(): void {
    this.cards = shuffle(this.cards);
  }
}
