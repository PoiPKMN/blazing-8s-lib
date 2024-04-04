import { Card } from "./card";
import { CardTypes } from "./card-types";
import { Colors } from "./colors";
import { Ranks } from "./ranks";
import { Specials } from "./specials";

export class SpecialCard extends Card {
  constructor(color: Colors, rank: Ranks, special: Specials) {
    super(color, rank, CardTypes.SPECIAL_CARD, special);
  }
}
