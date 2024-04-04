import { Player } from "../types/players/player";
import { get, head, shuffle } from "lodash";

export class TurnManager {
  get currentPlayer(): Player {
    return get(this.order, this.currentIndex);
  }

  get nextPlayer(): Player {
    return get(this.order, this.getNextIndex());
  }

  private _isOrderReversed: boolean = false;
  get isOrderReversed(): boolean {
    return this._isOrderReversed;
  }
  
  private order: Player[] = [];
  private currentIndex: number = 0;

  /**
   * @returns the first player in the order
   */
  initializeOrder(players: Player[]): Player {
    this.order = shuffle(players);
    return head(this.order) as Player;
  }

  /**
   * @returns true if the order is reversed after the method block
   */
  changeDirection(): boolean {
    this._isOrderReversed = !this.isOrderReversed;
    return this._isOrderReversed;
  }

  /**
   * @returns the current player after the iteration has happened
   */
  next(): Player {
    this.currentIndex = this.getNextIndex();
    return this.currentPlayer;
  }

  private getNextIndex(): number {
    if (!this._isOrderReversed) {
      return (this.currentIndex === this.order?.length) ?
        0 :
        this.currentIndex + 1;
    } else {
       return (this.currentIndex === 0) ?
        this.order?.length :
        this.currentIndex - 1;
    }
  }
}
