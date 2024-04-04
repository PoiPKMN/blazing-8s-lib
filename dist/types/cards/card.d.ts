import { Guid } from "guid-ts";
import { CardTypes } from "./card-types";
import { Colors } from "./colors";
import { Ranks } from "./ranks";
import { Specials } from "./specials";
export declare class Card {
    id: Guid;
    color: Colors;
    readonly rank: Ranks;
    readonly type: CardTypes;
    readonly special: Specials;
    constructor(color: Colors, rank: Ranks, type: CardTypes, special: Specials);
}
