export declare enum ErrorTypes {
    NOT_USERS_TURN = "NOT_USERS_TURN"
}
export declare abstract class Blazing8sError {
    id: ErrorTypes;
    message: string;
}
export declare class NotUsersTurnError extends Blazing8sError {
    readonly id: ErrorTypes;
    readonly message: string;
}
