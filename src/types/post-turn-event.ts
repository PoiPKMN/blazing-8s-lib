import { Action } from "./actions";
import { Card, Player, NotUsersTurnError } from ".";

export interface PostTurnEvent {
  topCard: Card;
  nextPlayer: Player | null;
  players: Player[];
  action: Action;
  error: NotUsersTurnError | null;
  isWildCardInPlay: boolean;
  isGameOver: boolean;
}
