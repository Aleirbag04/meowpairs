import React from 'react';
import back from '../images/back.png';






const Cards = props => {

    const chooseCard = () => {
        props.selectedCards(props.card);

    }
    
    return (
        <>
            <div className='gameCard'>
                <div className={props.turned ? "turned" : ""}>
                    <img className="cardSide pairCard" src={props.card.card}/> 
                    <img className="cardSide backCard" src={back} onClick={chooseCard}/> 
                </div>
            </div>

        </>
    
    );
}

export default Cards;