import { Card, Player } from ".";

export enum Actions {
  DRAW,
  SKIP,
  PLAY_CARD,
}
export interface Action {
  type: Actions;
  player: Player;
  cardPlayed: Card;
}
