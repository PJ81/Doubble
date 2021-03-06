import Card from "./card.js";
import Doubble from "./doubble.js";

class Game {
  doubble: Doubble;
  cardA: HTMLDivElement;
  cardB: HTMLDivElement;
  nextBtn: HTMLButtonElement;
  allBtn: HTMLButtonElement;
  backBtn: HTMLButtonElement;
  symbols: string[];
  card1: Card;
  card2: Card;
  content: HTMLDivElement;
  allCards: HTMLDivElement;

  constructor() {
    this.doubble = new Doubble(13);
    this.cardA = <HTMLDivElement>document.getElementById("cardA");
    this.cardB = <HTMLDivElement>document.getElementById("cardB");

    this.nextBtn = <HTMLButtonElement>document.getElementById("nextBtn");
    this.allBtn = <HTMLButtonElement>document.getElementById("allBtn");
    this.backBtn = <HTMLButtonElement>document.getElementById("backBtn");
    this.content = <HTMLDivElement>document.getElementById("content");
    this.allCards = <HTMLDivElement>document.getElementById("allCards");

    this.nextBtn.addEventListener("click", () => this.nextClick());
    this.allBtn.addEventListener("click", () => this.drawAllCards());
    this.backBtn.addEventListener("click", () => this.backToGame());

    this.symbols = [
      "๐ป", "๐ฒ", "โ ๏ธ", "๐ฝ", "๐พ", "๐ค", "๐", "๐ค ", "๐", "๐น",
      "๐บ", "๐คก", "๐ฉ", "๐ธ", "๐คด", "๐ผ", "๐", "๐จโ๐", "๐", "โ๏ธ",
      "๐งต", "๐", "๐", "๐", "๐", "๐ซ", "๐", "โ๏ธ", "๐๐ป", "๐ถ",
      "๐ฑ", "๐ญ", "๐น", "๐ฐ", "๐ฆ", "๐ป", "๐ผ", "๐", "๐ฆ", "๐ฆ",
      "๐ฅ", "๐ฆ", "๐ข", "๐", "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆ",
      "๐", "๐ณ", "๐", "๐ฒ", "๐ต", "๐", "๐ฅจ", "๐งฎ", "๐ผ", "๐",
      "๐คข", "๐ฅถ", "๐", "๐", "๐ฅ", "๐ฃ", "๐", "๐", "๐ง ", "๐ฆท",
      "๐ง", "๐ต", "๐งโโ๏ธ", "๐คฆโโ๏ธ", "๐ฉโ๐", "๐ฉโ๐พ", "๐", "๐ฒ", "๐ฆธโโ๏ธ", "๐ฆนโโ๏ธ",
      "๐ง", "๐ง", "๐งโโ๏ธ", "๐งโโ๏ธ", "๐งโโ๏ธ", "๐งโโ๏ธ", "๐", "๐", "๐ง", "๐",
      "๐โโ๏ธ", "๐ฉ", "๐๏ธโโ๏ธ", "๐ดโโ๏ธ", "๐คฝ", "๐คนโโ๏ธ", "๐", "๐คพโโ๏ธ", "๐ฃ", "๐คธ",
      "๐ฅฉ", "๐", "๐ฉ", "๐ฆ", "๐ฆ", "๐", "๐ฆ", "๐ฎ", "๐ท", "๐",
      "๐ซ", "๐ฆ", "๐", "๐", "๐ฆ", "๐ช", "๐ฆจ", "๐", "๐ฅ", "๐ง",
      "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆ", "๐ธ", "๐ ", "๐", "๐ฆ", "๐", "๐ฆ ",
      "๐", "๐ด", "๐ผ", "๐", "๐", "๐", "๐งฟ", "๐ฟ", "๐", "๐",
      "โฝ", "๐", "๐ฅ", "๐ณ", "๐ช", "๐ช", "๐ฑ", "๐ฐ", "๐งธ", "๐",
      "๐ฏ", "๐", "๐งถ", "๐", "๐", "๐", "๐ฉฐ", "๐", "๐ฉ", "๐",
      "๐ฅ", "โณ", "๐งฆ", "๐ฅพ", "๐ฏ", "๐ถ", "๐ธ", "๐ฅ", "๐", "๐",
      "๐ฅ", "๐ญ", "๐ฅ", "๐ฌ", "๐ฎ", "๐ช", "๐", "๐", "๐ฐ", "๐ฆ",
      "๐ฎ", "๐งฌ", "๐ช", "๐ซ", "๐งฒ", "๐", "๐ฉธ", "๐งท", "๐งฏ", "๐ณ๏ธโ๐"];

    this.nextClick();

    //this.test();
  }

  backToGame() {
    this.content.classList.remove("hide");
    this.allCards.classList.add("hide");
  }

  nextClick() {
    this.card1 = this.doubble.getOneCard();
    this.card2 = this.doubble.getOneCard();

    this.showCard(this.card1, this.cardA);
    this.showCard(this.card2, this.cardB);
  }

  showCard(c: Card, div: HTMLDivElement) {
    c.shuffleSymbols();
    div.innerHTML = "";
    c.symbols.forEach(s => {
      const d = document.createElement("div");
      d.classList.add("pic");
      d.innerText = this.symbols[s];
      d.addEventListener("click", () => this.checkMatch(s));
      div.appendChild(d);
    });
  }

  checkMatch(s: number) {
    if (this.match(s)) {
      this.nextClick();
    } else {
      //something else
    }
  }

  match(s: number): boolean {
    let f1 = false, f2 = false;
    for (let x = 0; x < this.card1.symbols.length; x++) {
      if (this.card1.symbols[x] === s) {
        f1 = true;
        break;
      }
    }
    for (let x = 0; x < this.card2.symbols.length; x++) {
      if (this.card2.symbols[x] === s) {
        f2 = true;
        break;
      }
    }
    return f1 && f2;
  }

  drawAllCards() {
    this.content.classList.add("hide");
    this.allCards.classList.remove("hide");

    let div: HTMLDivElement, divCrds = <HTMLDivElement>document.getElementById("crds");;
    this.doubble.cards.forEach(card => {
      div = <HTMLDivElement>document.createElement("div");
      div.classList.add("allCrds");
      card.symbols.forEach(s => {
        const d = document.createElement("div");
        d.classList.add("pic");
        d.innerText = this.symbols[s];
        d.addEventListener("click", () => this.checkMatch(s));
        div.appendChild(d);
      });
      divCrds.appendChild(div);
    });
  }

  /*test() {
    let c: Card, d: Card, f: boolean, l = this.doubble.cards.length;
    for (let a = 0; a < l; a++) {
      for (let b = 0; b < l; b++) {
        if (a === b) continue;
        c = this.doubble.cards[a];
        d = this.doubble.cards[b];

        f = false;
        beg:
        for (let z = 0; z < c.symbols.length; z++) {
          for (let u = 0; u < c.symbols.length; u++) {
            if (c.symbols[z] === d.symbols[u]) {
              f = true;
              break beg;
            }
          }
        }

        if (!f) {
          console.log("!!!!! E R R O R !!!!!");
          console.log(c.symbols);
          console.log(d.symbols);
          return;
        }
      }
    }
    console.log("!!!!! C O O L !!!!!");
  }*/
}

new Game();