import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./css-cards/Card.css";

function Card({ rank, suit, dealing = false }) {
  const [isFaceDown, setIsFaceDown] = useState(true);
  const isRoyalRank = ["A", "J", "Q", "K"].includes(rank);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      addCardElements(card, rank, suit);
    }
  }, [rank, suit]);

  const renderPips = () => {
    const pipCount = isRoyalRank ? 1 : parseInt(rank);

    const pips = [];
    for (let i = 0; i < pipCount; i++) {
      pips.push(
        <div key={i} className="pip" data-suit={suit} data-rank={rank} />
      );
    }
    return pips;
  };

  const renderRoyalRank = () => (
    <>
      <div className="pip royal-symbol" data-suit={suit} data-rank={rank} />
      <span className="royal-rank">{rank}</span>
    </>
  );

  return (
    <div
      className={`card ${isFaceDown ? "flipped" : ""} ${
        dealing ? "dealing" : ""
      }`}
      data-suit={suit}
      data-rank={rank}
      onClick={() => setIsFaceDown(!isFaceDown)}
    >
      
      {isFaceDown ? null : isRoyalRank ? renderRoyalRank() : renderPips()}
      <div className="corner-number top">{rank}</div>
      <div className="corner-number bottom">{rank}</div>
    </div>
  );
}

Card.propTypes = {
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
  dealing: PropTypes.bool,
};

export default Card;
