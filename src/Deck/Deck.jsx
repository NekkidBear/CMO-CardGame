// Import necessary modules
import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/CardV2.jsx";
import './Deck.css'

// Define the Deck component
function Deck({ numCardsToDeal = 5}) {
  // Define a function to initialize a deck of cards
  const initializeDeck = () => {
    // Define the suits, ranks, and colors of the cards
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

    // Initialize an empty deck array
    let deck = [];

    // Loop over each suit
    for (let suit of suits) {
      // For each suit, loop over each rank
      for (let rank of ranks) {
        // Push a new card object to the deck array for each suit and rank
        deck.push({ suit, rank, color: colors[suit] });
      }
    }

    // Return the full deck
    return deck;
  };

  // Initialize the face down deck state with a full deck of cards
  const [faceDownDeck, setFaceDownDeck] = useState(initializeDeck());

  // Initialize the player hand state as an empty array
  const [playerHand, setPlayerHand] = useState([]);

  // Initialize the dealing state as false
  const [dealing, setDealing] = useState(false);

  // Define a function to handle dealing cards
  const handleDealCards = () => {
    // Set the player hand to the first few cards from the face down deck
    setPlayerHand(faceDownDeck.slice(0, numCardsToDeal));

    // Remove the dealt cards from the face down deck
    setFaceDownDeck((prevDeck) => prevDeck.slice(numCardsToDeal));

    // Set the dealing state to true to start the dealing animation
    setDealing(true);
  };

  // Define a function to shuffle the cards
  const shuffleCards = () => {
    // Create a new array from the face down deck to shuffle
    let shuffledDeck = [...faceDownDeck];

    // Use the Fisher-Yates algorithm to shuffle the deck
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    // Set the face down deck state to the shuffled deck
    setFaceDownDeck(shuffledDeck);
  };

  // Log the player hand to the console for debugging
  console.log(playerHand);

  // Render the Deck component
  return (
    <div className="MasterDeck">
      <div className="undealt-cards">
        {/* Render the face down deck */}
        {faceDownDeck.map((card, index) => (<Card index={index} rank={card.rank} suit={card.suit} dealing={dealing}/>))}
      </div>
      {/* Render the Deal Cards button */}
      <button onClick={handleDealCards}>Deal Cards</button>
      {/* Render the Shuffle Cards button */}
      <button onClick={shuffleCards}>Shuffle Cards</button>
      <div className="card-container">
        {/* Render the player hand */}
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

// Define the prop types for the Deck component
Deck.propTypes = { numCardsToDeal: PropTypes.number };

// Export the Deck component as the default export
export default Deck;