import { Card } from "../types/cards/card";
import { Action, Actions } from "../types/actions";
import { Player } from "../types";

export const canPlayerDoTurn = (action: Action, topCard: Card, player: Player, wildCardPlayer: Player | null): boolean =>
  (doesCardMatch(action, topCard) || isDrawOrSkip(action, topCard)) &&
  isPlayerWildcardPlayer(player, wildCardPlayer);

const doesCardMatch = (action: Action, topCard: Card): boolean =>
  action.cardPlayed?.color === topCard.color ||
  action.cardPlayed?.rank === topCard.rank;

const isDrawOrSkip = (action: Action, topCard: Card): boolean =>
  action.type === Actions.DRAW ||
  action.type === Actions.SKIP;

const isPlayerWildcardPlayer = (player: Player, wildCardPlayer: Player | null): boolean =>
  !wildCardPlayer || (!!wildCardPlayer && player.id === wildCardPlayer.id);
