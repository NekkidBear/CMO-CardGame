// Import necessary modules
import React, { useState } from "react";
import PropTypes from "prop-types";
import './css-cards/Card.css'; // Import the CSS file with the provided styles

// Define the Card component
function Card({ rank, suit, color, dealing = false }) {
  // Initialize the isFaceDown state as true
  const [isFaceDown, setIsFaceDown] = useState(true);

  // Render the Card component
  return (
    <div
      // Set the class name based on the isFaceDown and dealing states
      className={`card ${isFaceDown ? "flipped" : ""} ${dealing ? "dealing" : ""}`}
      // Set the CSS variable --i to the index of the card
      style={{ "--i": index }}
      // Set the suit and rank of the card as data attributes
      data-suit={suit}
      data-rank={rank}
      // Flip the card when it's clicked
      onClick={() => setIsFaceDown(!isFaceDown)}
    >
      {/* Render the rank and suit of the card */}
      <div className="corner-number top">{rank}</div>
      <div className="pip">{suit}</div>
      <div className="corner-number bottom">{rank}</div>
    </div>
  );
}

// Define the prop types for the Card component
Card.propTypes = {
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dealing: PropTypes.bool,
};

// Export the Card component as the default export
export default Card;