import React, { useState } from "react";
import PropTypes from "prop-types";
import './css-cards/Card.css'; // Import the CSS file with the provided styles

function Card({ rank, suit, dealing, index}) {
  let [isFaceDown, setIsFaceDown] = useState(true);
  const isRoyalRank = ["A", "J", "Q", "K"].includes(rank);

  const pipCount = isRoyalRank ? 1 : rank;

  const renderPips = () => {
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

  const renderCornerNumber = (position) => (
    <div className={`corner-number ${position}`}>
      {rank}
      <div className="corner-symbol" data-suit={suit} />
    </div>
  );

  return (
    <div
      className={`card ${isFaceDown ? "flipped" : ""}  ${dealing ? "dealing" : ""}`}
      style={{ "--i": index }}
      data-suit={suit}
      data-rank={rank}
      onClick={() => setIsFaceDown(!isFaceDown)}
    >
      {isFaceDown ? null : isRoyalRank ? renderRoyalRank() : renderPips()}
      {renderCornerNumber("top")}
      {renderCornerNumber("bottom")}
    </div>
  );
}

export default Card;
