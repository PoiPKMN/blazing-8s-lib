export enum ErrorTypes {
  NOT_USERS_TURN = 'NOT_USERS_TURN',
}
export abstract class Blazing8sError {
  id!: ErrorTypes;
  message!: string;
}
export class NotUsersTurnError extends Blazing8sError {
  override readonly id: ErrorTypes = ErrorTypes.NOT_USERS_TURN;
  override readonly message: string = 'It is not your turn';
}
