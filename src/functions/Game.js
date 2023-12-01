class Game {
  constructor(cards) {
    this._score = 0;
    this._cards = cards;
  }

  get score() {
    return this._score;
  }
  get cards() {
    return this._cards;
  }

  shuffleCards() {
    let array = this._cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this._cards = array;
  }
}
