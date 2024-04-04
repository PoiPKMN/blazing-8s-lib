import { SuiteCard } from "./suite-card";
export declare class Deck {
    private cards;
    constructor();
    /**
     * Removes a card from the top of the deck, removes it and returns it.
     * @returns the Card that was drawn
     */
    draw(): SuiteCard;
    shuffle(): void;
}
