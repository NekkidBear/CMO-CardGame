import React from "react";
import Card from "../Card/CardV2.jsx";

/** This component initializes and renders an object representing a deck of cards */
function Deck() {
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
    }

    let deck = [];

    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push({ suit, rank, color: colors[suit]});
      }
    }
    return deck;
  };

  let deck = initializeDeck();

  return(
    <div className="MasterDeck">
        {deck.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit} color={card.color} />
        ))}
    </div>
  )
}
