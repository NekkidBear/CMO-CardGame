import React, {useState}from "react";

/** This function will create a react component to render a single card */

function Card({rank, suit, color, backImage}){
    //todo
    let [isFaceDown, setIsFaceDown] = useState(true);
    let [discardStatus, setDiscardStatus] = useState(false);
    
    const flipCard = () => {
        setIsFaceDown(!isFaceDown);
    }
    const toggleDiscardStatus = () =>{
        setDiscardStatus(!discardStatus);
    }
    const determinePipLayout = (rank, suit) => {
        let pipLayout ="";
        switch (rank){
            case 'A':
            case 'J':
            case 'Q':
            case 'K':
                pipLayout = `
                    <img src={${suit}.svg</img>
                    <span className="royalRank" >${rank}</span>
                `;
                break;
            case 2:
                pipLayout = `
                    <img>${suit}.svg</img>
                    <img>${suit}.svg</img>
                `
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6: 
                break;
            case 7:
                break;
            case 8:
                break;
            case 9: 
                break;
            case 10:
                break;
        }
        return pipLayout
    }
   
    const generateCardFace = (rank, suit, color) =>{
        let cardLayout = determinePipLayout(rank, suit)
        return cardLayout;
    }

    let cardImage = isFaceDown? backImage : generateCardFace(rank, suit, color);

    return (
        <>
            <div className="card" onClick={toggleDiscardStatus}>
            {cardImage}
            <button className="peek" onClick={flipCard}>Peek</button>
            </div>
        </>
    )
}