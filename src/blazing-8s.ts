
import { Guid } from "guid-ts";
import { Action } from "./types/actions";
import { DeckManager } from "./managers/deck-manager";
import { canPlayerDoTurn } from "./utils/can-player-do-turn";
import { Player, NotUsersTurnError, Specials, Colors, Blazing8sError } from "./types";
import { PlayerDataManager } from "./managers/player-data-manager";
import { PlayfieldManager } from "./managers/playfield-manager";
import { PostTurnEvent } from "./types/post-turn-event";
import { TurnManager } from "./managers/turn-manager";

export class Blazing8s {
  playfield: PlayfieldManager;
  private turnManager: TurnManager;
  private deckManager: DeckManager;
  private playerDataManager: PlayerDataManager;
  private hasGameStarted: boolean = false;
  private isWildCardInPlay: boolean = false;
  private wildCardPlayer: Player | null = null;
  private isGameOver: boolean = false;

  constructor() {
    this.deckManager = new DeckManager();
    this.playfield = new PlayfieldManager();
    this.turnManager = new TurnManager();
    this.playerDataManager = new PlayerDataManager();
  }

  /**
   * 
   * @param player the player who wants to player
   * @returns the registering players starting deck OR null if the game has already started
   */
  register(playerName: string): Guid | null {
    if (this.hasGameStarted) {
      return null;
    }
    return this.playerDataManager.register(playerName);
  }

  /**
   * 
   * @returns the guid for the first player to have a turn
   */
  start(): Guid {
    const players = this.playerDataManager.getAllPlayers();
    if (players.length < 2) {
    }
    // assign starting hands
    players.map((player) => player.id).forEach((pid) => {
      this.playerDataManager.giveCardsToPlayer(pid.toString(), this.deckManager.dealHand());
    });
    // set initial flags
    this.hasGameStarted = true;
    // initialize the order in turn manager
    // explicitly getting a second reference to getAllPlayers() to ensure the reference is not stale(unsure)
    return this.turnManager.initializeOrder(this.playerDataManager.getAllPlayers()).id;
  }

  reset(): void {
    this.playfield = new PlayfieldManager();
    this.turnManager = new TurnManager();
    this.deckManager = new DeckManager();
    this.playerDataManager = new PlayerDataManager();
    this.hasGameStarted = false;
    this.isWildCardInPlay = false;
    this.wildCardPlayer = null;
    this.isGameOver = false;
  }

  do<ActionType extends Action>(action: ActionType): PostTurnEvent | null {
    if (!this.hasGameStarted) {
      return null;
    }
    
    let error: Blazing8sError | null = null;

    const special = action.cardPlayed.special;
    
    if (this.isWildCardInPlay) {
      this.handleWildCardPostSelection(special, action.cardPlayed.color);
    } else {
      // put the first card down
      this.playfield.acceptCard(this.deckManager.draw());

      // can the player do that? -> handle action or set error state
      if (canPlayerDoTurn(action, this.playfield.peek(), action.player, this.wildCardPlayer)) {
        // put down the card
        this.playfield.acceptCard(action.cardPlayed);
        const player = this.playerDataManager.get(action.player.id.toString());
        if (!!player) {
          player.hand = player?.hand.filter((card) => card.id !== action.cardPlayed.id) ?? player.hand;
        }

        // if special card -> do that action
        const opponents = this.playerDataManager.getAllPlayers().filter((plr) => plr.id !== action.player.id);
        this.handlePlusOne(special, opponents);
        this.handleSwapHands(special, action.player, this.turnManager.nextPlayer);
        this.handleChangeDirection(special);
        this.handleSkipNextUser(special);
        this.handleWildCard(special, action.player);

        // check win/lose conditions
        const allPlayers = this.playerDataManager.getAllPlayers();
        const winningPlayer = allPlayers.find((player) => player.hand.length < 1);
        if (!!winningPlayer) {
          this.isGameOver = true;
        }
      } else {
        error = new NotUsersTurnError();
      }
    }

    return {
      error,
      action,
      players: this.playerDataManager.getAllPlayers(),
      nextPlayer: this.isGameOver ? null : this.turnManager.currentPlayer,
      topCard: this.playfield.peek(),
      isWildCardInPlay: this.isWildCardInPlay,
      isGameOver: this.isGameOver,
    }
    // if yes -> put the card on the start, start the next turn, handle win/lost conditions
  }

  private handlePlusOne(special: Specials, opponents: Player[]): void {
    if (special === Specials.PLUS_ONE) {
      opponents.forEach((opp) => {
        this.playerDataManager.giveCardsToPlayer(opp.id.toString(), [this.deckManager.draw()]);
      });
    }
  }

  private handleSwapHands(special: Specials, player: Player, nextPlayerInOrder: Player): void {
    if (special === Specials.SWAP_HANDS) {
      player.swapHands(nextPlayerInOrder.hand);
    }
  }

  private handleChangeDirection(special: Specials): void {
    if (special === Specials.CHANGE_DIRECTION) {
      this.turnManager.changeDirection();
    }
  }

  private handleSkipNextUser(special: Specials): void {
    if (special === Specials.SKIP_NEXT_USER) {
      this.turnManager.next();
    }
  }

  private handleWildCard(special: Specials, player: Player): void {
    if (special === Specials.WILD_CARD) {
      this.isWildCardInPlay = true;
      this.wildCardPlayer = player;
    }
  }

  private handleWildCardPostSelection(special: Specials, color: Colors): void {
    if (special === Specials.WILD_CARD) {
      this.playfield.peek().color = color;
      this.isWildCardInPlay = false;
      this.wildCardPlayer = null;
    }
  }
}
