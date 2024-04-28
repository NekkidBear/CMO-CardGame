import React from 'react';
import './css-cards/Card.css'; // Import the CSS file with the provided styles

const Card = ({ rank, suit, value }) => {
  const isRoyalRank = ['A', 'J', 'Q', 'K'].includes(rank);
  const pipCount = isRoyalRank ? null : parseInt(value, 10);

  const renderPips = () => {
    const pips = [];
    for (let i = 0; i < pipCount; i++) {
      pips.push(<div key={i} className="pip" style={{ backgroundImage: `url(imgs/${suit}.svg)` }} />);
    }
    return pips;
  };

  const renderRoyalRank = () => (
    <>
      <img src={`imgs/${suit}.svg`} alt={`${suit} symbol`} className="royal-symbol" />
      <span className="royal-rank">{rank}</span>
    </>
  );

  const renderCornerNumber = (position) => (
    <div className={`corner-number ${position}`}>
      {value}
      <img src={`imgs/${suit}.svg`} alt={`${suit} symbol`} className="corner-symbol" />
    </div>
  );

  return (
    <div className={`card ${suit}`} data-suit={suit} data-value={value}>
      {isRoyalRank ? renderRoyalRank() : renderPips()}
      {renderCornerNumber('top')}
      {renderCornerNumber('bottom')}
    </div>
  );
};

export default Card;