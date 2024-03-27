import { Colors } from "./color";
import { Rank } from "./rank";

export class Card {
  color: Colors;
  rank: Rank;

  constructor(color: Colors, rank: Rank) {
    this.color = color;
    this.rank = rank;
  }
}
