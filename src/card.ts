import { shuffleArray } from "./helpers.js";

export default class Card {
  pos: number;
  symbols: number[];

  constructor(p: number) {
    this.symbols = [];
    this.pos = p;
  }

  addSymbols(syb: number) {
    this.symbols.push(syb);
  }

  shuffleSymbols() {
    shuffleArray(this.symbols, 5);
  }
}