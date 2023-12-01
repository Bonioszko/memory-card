import Card from "./card";
import { useEffect, useState } from "react";
import Footer from "./footer";
import "../styles/content.css";
function Content() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  function restartGame() {
    if (highScore < score) {
      setHighScore(score);
    }
    setScore(0);
    setCards(generateNumbers(5));
  }
  function handleState() {
    setScore(score + 1);
    console.log(score);
  }
  function shufleCards() {
    let array = cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCards(array);
  }
  function generateNumbers(n) {
    let numbers = [];

    while (numbers.length < n) {
      let randomNum = Math.floor(Math.random() * 200 + 1);

      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }

    return numbers;
  }
  useEffect(() => {
    setCards(generateNumbers(5));
  }, []);

  const listCards = cards.map((card) => (
    <Card
      number={card}
      change={handleState}
      shufleCards={shufleCards}
      restart={restartGame}
      key={card.toString()}
    ></Card>
  ));
  return (
    <div className="content">
      <Footer score={score} highscore={highScore}></Footer>
      <div className="main">{listCards}</div>
    </div>
  );
}

export default Content;
