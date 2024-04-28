import React, {useState} from 'react';
import './css-cards/Card.css'; // Import the CSS file with the provided styles
import backImage from '../assets/back_image/card-back-black.png';

function Card({ rank, suit, value }) {
  let [isFaceDown, setIsFaceDown] = useState(false)
  const isRoyalRank = ['A', 'J', 'Q', 'K'].includes(rank);

  const pipCount = isRoyalRank ? 1: value;

  const renderPips = () => {
    const pips = [];
    for (let i = 0; i < pipCount; i++) {
      pips.push(<div key={i} className="pip" data-suit={suit} data-value={value} />);
    }
    return pips;
  };

  const renderRoyalRank = () => (
    <>
      <div className="pip royal-symbol" data-suit={suit} data-value={value} />
      <span className="royal-rank">{rank}</span>
    </>
  );

  const renderCornerNumber = (position) => (
    <div className={`corner-number ${position}`}>
      {value}
      <div className="corner-symbol" data-suit={suit} />
    </div>
  );

  return (
    <div className={`card ${suit}`} data-suit={suit} data-value={value} onClick={() => setIsFaceDown(!isFaceDown)}>
      {isFaceDown? <img src={backImage} alt="Card back" className="card-back" /> :isRoyalRank ? renderRoyalRank() : renderPips()}
      {renderCornerNumber('top')}
      {renderCornerNumber('bottom')}
    </div>
  );
}

export default Card;
