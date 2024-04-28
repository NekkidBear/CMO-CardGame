import React, {useState} from 'react';
import './css-cards/Card.css'; // Import the CSS file with the provided styles
import backImage from '../assets/back_image/card-back-black.png';
import { cups, coins, staves, swords, terrapins, octograms, elephants, crowns,king, queen, jack} from '../assets/suit_icons'

function Card({ rank, suit, value }) {
  let [isFaceDown, setIsFaceDown] = useState(true)
  const isRoyalRank = ['A', 'J', 'Q', 'K'].includes(rank);
  const pipImages = {
    'cups': cups,
    'coins': coins,
    'staves': staves,
    'swords': swords,
    'terrapins': terrapins,
    'octograms': octograms,
    'elephants': elephants,
    'crowns': crowns,
    'K': king,
    'Q': queen,
    'J': jack,
  }

  const pipCount = isRoyalRank ? 1: value;

  const renderPips = () => {
    const pips = [];
    for (let i = 0; i < pipCount; i++) {
      pips.push(<div key={i} className="pip" style={{ backgroundImage: `url(${pipImages[suit]}.svg)` }} />);
    }
    return pips;
  };

  const renderRoyalRank = () => (
    <>
      <img src={pipImages[rank]} alt={`${suit} symbol`} className="royal-symbol" />
      <span className="royal-rank">{rank}</span>
    </>
  );

  const renderCornerNumber = (position) => (
    <div className={`corner-number ${position}`}>
      {value}
      <img src={pipImages[suit]} alt={`${suit} symbol`} className="corner-symbol" />
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