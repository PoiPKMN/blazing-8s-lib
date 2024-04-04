import { CardTypes } from "./card-types";
import { Colors } from "./colors";
import { Card } from "./card";
import { Ranks } from "./ranks";
import { Specials } from "./specials";

export class SuiteCard extends Card {
  constructor(color: Colors, rank: Ranks) {
    super(color, rank, CardTypes.CARD, Specials.NONE);
  }
}
