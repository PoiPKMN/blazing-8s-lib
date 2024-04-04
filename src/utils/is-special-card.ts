import { CardTypes } from "../types/cards/card-types";
import { Card } from "../types/cards/card";
import { SpecialCard } from "../types/cards/special-card";

export const isSpecialCard = (card: Card): card is SpecialCard =>
  card.type === CardTypes.SPECIAL_CARD;
export const isNormalCard = (card: Card): card is Card =>
  card.type === CardTypes.CARD;
