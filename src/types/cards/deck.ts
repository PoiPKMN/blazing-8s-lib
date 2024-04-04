import { shuffle } from "lodash";
import { SuiteCard } from "./suite-card";
import { getCardList } from "../../assets/cards-list";

export class Deck {
  private cards: SuiteCard[] = [];

  constructor() {
    this.cards = getCardList();
  }

  /**
   * Removes a card from the top of the deck, removes it and returns it.
   * @returns the Card that was drawn
   */
  draw(): SuiteCard {
    const [ firstCard, ...restOfDeck ] = this.cards;
    this.cards = restOfDeck;
    return firstCard;
  }

  shuffle(): void {
    this.cards = shuffle(this.cards);
  }
}
