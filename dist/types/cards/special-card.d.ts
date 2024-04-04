import { Card } from "./card";
import { Colors } from "./colors";
import { Ranks } from "./ranks";
import { Specials } from "./specials";
export declare class SpecialCard extends Card {
    constructor(color: Colors, rank: Ranks, special: Specials);
}
