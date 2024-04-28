import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import Card from "../Card/CardV2.jsx";

function Deck({ numCardsToDeal = 5 }) { // Default value if not passed as prop
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
    let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let colors = {
        "cups": "#ff0000",
        "crowns": "#ff0000",
        "swords": "#ffaa00",
        "elephants": "#ffaa00",
        "staves":"00ff00",
        "octograms":"00ff00",
        "coins": "0000ff",
        "terrapins": "0000ff",
    };

    let deck = [];

    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push({ suit, rank, color: colors[suit] });
      }
    }

    return deck;
  };
  Deck.propTypes = {numCardsToDeal: PropTypes.number,};


  const [deck, setDeck] = useState(initializeDeck());
  const [dealtCards, setDealtCards] = useState([]);

//   useEffect(() => {
//     setDealtCards(deck.slice(0, numCardsToDeal));
//     setDeck(prevDeck => prevDeck.slice(numCardsToDeal));
//   }, [deck, numCardsToDeal]);

  const handleDealCards = () => {
    setDealtCards(deck.slice(0, numCardsToDeal));
    setDeck(prevDeck => prevDeck.slice(numCardsToDeal));
  };

  return (
    <div className="MasterDeck">
      <button onClick={handleDealCards}>Deal Cards</button>
      {dealtCards.map((card, index) => (
        <Card key={index} rank={card.rank} suit={card.suit} color={card.color} />
      ))}
    </div>
  );
}

export default Deck;