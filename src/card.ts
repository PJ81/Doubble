
import Point from "./point.js";

export default class Card {
  pos: Point;
  symbols: number[];

  constructor(p: Point) {
    this.symbols = [];
    this.pos = new Point(p.x, p.y);
  }

  addSymbols(syb: number) {
    this.symbols.push(syb);
  }

  equals(c: Card) {
    return this.pos.x === c.pos.x && this.pos.y === c.pos.y;
  }

  shuffleSymbols() {
    let ziel = this.symbols.length - 1, tmp, posA, end = ziel - 1;
    while (end > 0) {
      posA = Math.floor(Math.random() * end);
      tmp = this.symbols[posA];
      this.symbols[posA] = this.symbols[ziel];
      this.symbols[ziel] = tmp;
      end--;
      ziel--;
    }
  }
}