import { Action } from "../../actions";

export abstract class PlayerController {
  abstract do<ActionData>(action: Action<ActionData>): void;
}
