import { Card } from "../types/cards/card";
import { Action } from "../types/actions";
import { Player } from "../types";
export declare const canPlayerDoTurn: (action: Action, topCard: Card, player: Player, wildCardPlayer: Player | null) => boolean;
