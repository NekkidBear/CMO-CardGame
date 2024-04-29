import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/CardV2.jsx";
import './Deck.css'

function Deck({ numCardsToDeal = 13}) {
  const initializeDeck = () => {
    let suits = [
      "cups",
      "swords",
      "staves",
      "coins",
      "crowns",
      "elephants",
      "octograms",
      "terrapins",
    ];
    let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let colors = {
      cups: "#ff0000",
      crowns: "#ff0000",
      swords: "#ffaa00",
      elephants: "#ffaa00",
      staves: "00ff00",
      octograms: "00ff00",
      coins: "0000ff",
      terrapins: "0000ff",
    };

    let deck = [];

    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push({ suit, rank, color: colors[suit] });
      }
    }

    return deck;
  };

  const [faceDownDeck, setFaceDownDeck] = useState(initializeDeck());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealing, setDealing] = useState(false);

  const handleDealCards = () => {
    setPlayerHand(faceDownDeck.slice(0, numCardsToDeal));
    setFaceDownDeck((prevDeck) => prevDeck.slice(numCardsToDeal));
    setDealing(true)
  };

  const shuffleCards = () => {
    let shuffledDeck = [...faceDownDeck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    setFaceDownDeck(shuffledDeck);
  };
  console.log(playerHand);
  return (
    <div className="MasterDeck">
      <div className="undealt-cards">
        {faceDownDeck.map((card, index) => (<Card index={index} rank={card.rank} suit={card.suit} dealing={dealing}/>))}
      </div>
      <button onClick={handleDealCards}>Deal Cards</button>
      <button onClick={shuffleCards}>Shuffle Cards</button>
      <div className="card-container">
        {playerHand.map((card, index) => (
          <div key={index}>
            <Card
              key={index}
              rank={card.rank}
              suit={card.suit}
              color={card.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

Deck.propTypes = { numCardsToDeal: PropTypes.number };

export default Deck;
