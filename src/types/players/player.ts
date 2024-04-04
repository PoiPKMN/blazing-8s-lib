import { Guid } from "guid-ts";
import { Card } from "../cards";

export class Player {
  readonly id: Guid;
  readonly name: string;
  hand: Card[] = [];

  constructor(name: string) {
    this.id = Guid.newGuid();
    this.name = name;
  }

  swapHands(hand: Card[]): Card[] {
    const myHand = this.hand;
    this.hand = hand;

    return myHand;
  }

  receiveCard(card: Card): void {
    this.hand.push(card);
  }

  async chooseCard(): Promise<Card> {
    return new Promise((res, rej) => {
      // TODO
    });
  }
}
