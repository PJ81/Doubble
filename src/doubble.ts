import Card from "./card.js";
import { shuffleArray } from "./helpers.js";

export default class Doubble {
  cards: Card[];
  selectedCards: number[];
  symbolIdx: number;
  lastIdx: number;
  max: number;

  constructor(m: number = 7) {
    this.max = m
    this.init();
  }

  createRandMatrix() {
    this.selectedCards = [];
    this.lastIdx = 0;

    for (let n = 0; n < this.cards.length; n++)
      this.selectedCards.push(n);
    shuffleArray(this.selectedCards, 10);
  }

  createCards() {
    this.symbolIdx = 0;
    this.cards = [];
    for (let a = 0; a < this.max; a++) {
      for (let b = 0; b < this.max; b++) {
        this.cards.push(new Card(a * this.max + b));
      }
    }
  }

  findCard(p: number): Card {
    for (let c = 0; c < this.cards.length; c++) {
      let rd = this.cards[c];
      if (rd.pos === p) return rd;
    }
    return null;
  }

  createLine(hor: boolean) {
    let p: number;
    let c: Card;

    for (let a = 0; a < this.max; a++) {
      for (let b = 0; b < this.max; b++) {
        if (hor) p = a * this.max + b;
        else p = b * this.max + a;

        c = this.findCard(p);
        if (c !== null) {
          c.addSymbols(this.symbolIdx);
        }
      }
      this.symbolIdx++;
    }
  }

  createDiagonal(stp: number) {
    let sx = 0, x = 0, y = 0;
    let c: Card;

    for (let b = 0; b < this.max; b++) {
      y = 0;
      for (let a = 0; a < this.max; a++) {
        c = this.findCard(y * this.max + x);
        if (c !== null) {
          c.addSymbols(this.symbolIdx)
        }
        x += stp;
        y += 1;

        if (x >= this.max) x -= this.max;
        else if (y >= this.max) y -= this.max;
      }
      sx += 1;
      x = sx;
      this.symbolIdx++;
    }
  }

  createVanishingPointCards() {
    let s = 0;
    let c: Card;
    for (let v = 0; v <= this.max; v++) {
      c = new Card(-1);
      for (let i = 0; i < this.max; i++) {
        c.addSymbols(s)
        s += 1
      }
      c.addSymbols(this.symbolIdx)
      this.cards.push(c);
    }
  }

  getOneCard(): Card {
    const c = this.cards[this.selectedCards[this.lastIdx]];
    if (++this.lastIdx >= this.selectedCards.length) {
      this.createRandMatrix();
    }
    return c;
  }

  init() {
    this.createCards();
    this.createLine(true);
    this.createLine(false);
    for (let i = 1; i < this.max; i++) this.createDiagonal(i);
    this.createVanishingPointCards();
    this.cards.forEach(card => card.shuffleSymbols());
    this.createRandMatrix();
  }
}