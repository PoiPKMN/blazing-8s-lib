export enum ActionTypes {
  DRAW = 'DRAW',
  PLAY_CARD = 'PLAY_CARD',
  SKIP = 'SKIP',
}
export interface Action<Data> {
  type: ActionTypes;
  data: Data;
}
