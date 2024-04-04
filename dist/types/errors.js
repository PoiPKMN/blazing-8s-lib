"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotUsersTurnError = exports.Blazing8sError = exports.ErrorTypes = void 0;
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["NOT_USERS_TURN"] = "NOT_USERS_TURN";
})(ErrorTypes || (exports.ErrorTypes = ErrorTypes = {}));
class Blazing8sError {
}
exports.Blazing8sError = Blazing8sError;
class NotUsersTurnError extends Blazing8sError {
    constructor() {
        super(...arguments);
        this.id = ErrorTypes.NOT_USERS_TURN;
        this.message = 'It is not your turn';
    }
}
exports.NotUsersTurnError = NotUsersTurnError;
