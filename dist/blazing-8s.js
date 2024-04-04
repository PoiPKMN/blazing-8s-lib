"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blazing8s = void 0;
const deck_manager_1 = require("./managers/deck-manager");
const can_player_do_turn_1 = require("./utils/can-player-do-turn");
const types_1 = require("./types");
const player_data_manager_1 = require("./managers/player-data-manager");
const playfield_manager_1 = require("./managers/playfield-manager");
const turn_manager_1 = require("./managers/turn-manager");
class Blazing8s {
    constructor() {
        this.hasGameStarted = false;
        this.isWildCardInPlay = false;
        this.wildCardPlayer = null;
        this.isGameOver = false;
        this.deckManager = new deck_manager_1.DeckManager();
        this.playfield = new playfield_manager_1.PlayfieldManager();
        this.turnManager = new turn_manager_1.TurnManager();
        this.playerDataManager = new player_data_manager_1.PlayerDataManager();
    }
    /**
     *
     * @param player the player who wants to player
     * @returns the registering players starting deck OR null if the game has already started
     */
    register(playerName) {
        if (this.hasGameStarted) {
            return null;
        }
        return this.playerDataManager.register(playerName);
    }
    /**
     *
     * @returns the guid for the first player to have a turn
     */
    start() {
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
    reset() {
        this.playfield = new playfield_manager_1.PlayfieldManager();
        this.turnManager = new turn_manager_1.TurnManager();
        this.deckManager = new deck_manager_1.DeckManager();
        this.playerDataManager = new player_data_manager_1.PlayerDataManager();
        this.hasGameStarted = false;
        this.isWildCardInPlay = false;
        this.wildCardPlayer = null;
        this.isGameOver = false;
    }
    do(action) {
        var _a;
        if (!this.hasGameStarted) {
            return null;
        }
        let error = null;
        const special = action.cardPlayed.special;
        if (this.isWildCardInPlay) {
            this.handleWildCardPostSelection(special, action.cardPlayed.color);
        }
        else {
            // put the first card down
            this.playfield.acceptCard(this.deckManager.draw());
            // can the player do that? -> handle action or set error state
            if ((0, can_player_do_turn_1.canPlayerDoTurn)(action, this.playfield.peek(), action.player, this.wildCardPlayer)) {
                // put down the card
                this.playfield.acceptCard(action.cardPlayed);
                const player = this.playerDataManager.get(action.player.id.toString());
                if (!!player) {
                    player.hand = (_a = player === null || player === void 0 ? void 0 : player.hand.filter((card) => card.id !== action.cardPlayed.id)) !== null && _a !== void 0 ? _a : player.hand;
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
            }
            else {
                error = new types_1.NotUsersTurnError();
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
        };
        // if yes -> put the card on the start, start the next turn, handle win/lost conditions
    }
    handlePlusOne(special, opponents) {
        if (special === types_1.Specials.PLUS_ONE) {
            opponents.forEach((opp) => {
                this.playerDataManager.giveCardsToPlayer(opp.id.toString(), [this.deckManager.draw()]);
            });
        }
    }
    handleSwapHands(special, player, nextPlayerInOrder) {
        if (special === types_1.Specials.SWAP_HANDS) {
            player.swapHands(nextPlayerInOrder.hand);
        }
    }
    handleChangeDirection(special) {
        if (special === types_1.Specials.CHANGE_DIRECTION) {
            this.turnManager.changeDirection();
        }
    }
    handleSkipNextUser(special) {
        if (special === types_1.Specials.SKIP_NEXT_USER) {
            this.turnManager.next();
        }
    }
    handleWildCard(special, player) {
        if (special === types_1.Specials.WILD_CARD) {
            this.isWildCardInPlay = true;
            this.wildCardPlayer = player;
        }
    }
    handleWildCardPostSelection(special, color) {
        if (special === types_1.Specials.WILD_CARD) {
            this.playfield.peek().color = color;
            this.isWildCardInPlay = false;
            this.wildCardPlayer = null;
        }
    }
}
exports.Blazing8s = Blazing8s;
