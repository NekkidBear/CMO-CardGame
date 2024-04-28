import React, {useState} from 'react';
import './css-cards/Card.css'; // Import the CSS file with the provided styles
import backImage from '../assets/back_image/card-back-black.png';
import cups from '../assets/suit_icons/cups.svg';
import coins from '../assets/suit_icons/Coins.svg';
import staves from '../assets/suit_icons/staves.svg';
import swords from '../assets/suit_icons/Swords.svg'
import terrapins  from '../assets/suit_icons/terrapins.svg';
import octograms from '../assets/suit_icons/octagram.svg';
import elephants from '../assets/suit_icons/elephants.svg';
import crowns from '../assets/suit_icons/Crowns.svg';
import king  from '../assets/suit_icons/king.svg';
import queen  from '../assets/suit_icons/queen.svg';
import jack from '../assets/suit_icons/jack.svg';


function Card({ rank, suit, value }) {
  let [isFaceDown, setIsFaceDown] = useState(false)
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
      pips.push(<div key={i} className="pip" style={{ backgroundImage: `url(${pipImages[suit]})` }} />);
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