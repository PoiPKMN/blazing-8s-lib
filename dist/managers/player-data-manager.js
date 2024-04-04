"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDataManager = void 0;
const player_1 = require("../types/players/player");
class PlayerDataManager {
    constructor() {
        this.dataForPlayers = new Map();
    }
    /**
     * @returns the guid for the player
     */
    register(playerName) {
        const player = new player_1.Player(playerName);
        this.dataForPlayers.set(player.id.toString(), { player });
        return player.id;
    }
    get(playerId) {
        var _a;
        return (_a = this.dataForPlayers.get(playerId)) === null || _a === void 0 ? void 0 : _a.player;
    }
    getAllPlayers() {
        let players = [];
        this.dataForPlayers.forEach((player) => {
            players.push(player.player);
        });
        return players;
    }
    giveCardsToPlayer(playerId, cards) {
        const playerData = this.dataForPlayers.get(playerId);
        if (!!playerData) {
            cards.forEach((card) => {
                playerData.player.receiveCard(card);
            });
        }
    }
}
exports.PlayerDataManager = PlayerDataManager;
