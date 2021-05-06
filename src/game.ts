import Card from "./card.js";
import Doubble from "./doubble.js";

class Game {
  doubble: Doubble;
  cardA: HTMLDivElement;
  cardB: HTMLDivElement;
  nextBtn: HTMLButtonElement;
  symbols: string[];
  card1: Card;
  card2: Card;

  constructor() {
    this.doubble = new Doubble(11);
    this.cardA = <HTMLDivElement>document.getElementById("cardA");
    this.cardB = <HTMLDivElement>document.getElementById("cardB");
    this.nextBtn = <HTMLButtonElement>document.getElementById("nextBtn");
    this.nextBtn.addEventListener("click", () => this.nextClick());

    this.symbols = [
      "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "🤠", "😈", "👹",
      "👺", "🤡", "💩", "👸", "🤴", "👼", "🚀", "👨‍🚀", "🎅", "☂️",
      "🧵", "🎒", "💄", "💍", "🚂", "🏫", "🚒", "✈️", "🛌🏻", "🐶",
      "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐜", "🦟", "🦗",
      "🥘", "🦂", "🐢", "🐍", "🦑", "🦐", "🦞", "🦀", "🦖", "🦕",
      "🐙", "🐳", "🐉", "🐲", "🌵", "🌈", "🥨", "🧮", "🌼", "😛",
      "🤢", "🥶", "🙊", "💖", "💥", "💣", "🖖", "🙏", "🧠", "🦷",
      "🧔", "👵", "🧏‍♀️", "🤦‍♂️", "👩‍🎓", "👩‍🌾", "💂", "👲", "🦸‍♀️", "🦹‍♂️",
      "🧙", "🧚", "🧛‍♂️", "🧜‍♂️", "🧞‍♀️", "🧟‍♀️", "💃", "🏃", "🧖", "🏇",
      "🏄‍♀️", "🍩", "🏋️‍♂️", "🚴‍♀️", "🤽", "🤹‍♀️", "🛀", "🤾‍♀️", "👣", "🤸",
      "🥩", "🐒", "🐩", "🦝", "🦁", "🐆", "🦄", "🐮", "🐷", "🐏",
      "🐫", "🦒", "🐘", "🍔", "🦇", "🎪", "🦨", "🐓", "🐥", "🐧",
      "🦆", "🦉", "🦜", "🦚", "🐸", "🐠", "🐚", "🦋", "🐞", "🦠",
      "💈", "🌴", "🗼", "🍁", "🌋", "🍜", "🧿", "🍿", "🕌", "🌄"];

    this.nextClick();
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
      //this.nextClick();
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

}

new Game();