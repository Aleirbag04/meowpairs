import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import card1 from '../images/1.png';
import card2 from '../images/2.png';
import card3 from '../images/3.png';
import card4 from '../images/4.png';
import card5 from '../images/5.png';
import card6 from '../images/6.png';
import card7 from '../images/7.png';
import card8 from '../images/8.png';
//Cat cards were made on photoshop from opensource images//



const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8
]


/* Sounds Source: https://www.findsounds.com/about.html */
const catSounds = [
    new Audio('http://marge.com/journal/sounds/catmeow.wav'),
    new Audio('http://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/helloPurr/meow.mp3'),
    new Audio('http://www.fun-lover.com/music/wavs/cat.wav'),
    new Audio ('https://garaiweb.webnode.cz/_files/200001071-d323dd55a6/Cat.mp3')
   ];

const bell= new Audio('http://homepage.powerup.com.au/~rhayes/foolsnds/effects/beltnkl1.wav');


/*
   @arePairs
   @params item, array
   Description: checks if there are 2 cards of the same type already
*/

const arePairs = (item, array) => {
    let isPair = false;
    let index = array.indexOf(item);

    if(array[index+1] === array[index]){
        isPair = true;
    }
    else {
        isPair = false;
    }

    return isPair;
}

const Board = props => {
    //state to store the board
    const [newBoard, setNewBoard] = useState([]);
    //state to store selected cards
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);



  

    const createBoard = () =>{
       
        let board = [];
        const auxBoard = [];
        let isPair = false;

            for (let i=0; i < props.pairs*2; i++){
                
                const selectedCard = cards[Math.floor(Math.random()*props.pairs)];
                const repeated = board.includes(selectedCard);
               

                if (!repeated){
                    board.push(selectedCard);
                    auxBoard.push(selectedCard);
                    auxBoard.sort();
                }else{
                    isPair = arePairs(selectedCard, auxBoard);
                    
                    

                    if(!isPair){
                        board.push(selectedCard);
                        auxBoard.push(selectedCard);
                        auxBoard.sort();
                    } else {

                        while(isPair){
                            selectedCard = cards[Math.floor(Math.random()*props.pairs)];
                            repeated = board.includes(selectedCard);
                            isPair = arePairs(selectedCard, auxBoard);
    
                            if(!isPair || !repeated){
                                board.push(selectedCard);
                                auxBoard.push(selectedCard);
                                auxBoard.sort();
                            }
                        }
                    }
                }     
            }
            // Adding id to each card of the board
            board = board.map((card, index) => 
            ({ card: card, id: index + 1}));
            setNewBoard(board);
            
           

    }
    useEffect(() =>{
        //if the game started, or if the quantity of pairs changes (new level) a new board is created
        if(props.running === true){
            createBoard();
        }
        
    },[props.pairs, props.running]);
    
  
    
/*
    @selectedCards
    Description: set the cards to compare 
    @params card
*/
    const selectedCards = (card) =>{
        if(cardOne){
            setCardTwo(card);
        }else {
            setCardOne(card);
        }
    }


    /*
    @resetSelection
    Description: set state of cardOne and cardTwo to initial state
    @params card
*/
    const resectSelection = () => {
        setCardOne(null);
        setCardTwo(null);
    }

    /*
        When cardOne and cardTwo changes, both cards are compared.
        if are equals, cardOne is stored on state array to keep the card flipped.
    */

    useEffect(() => {
        if(cardOne && cardTwo){
            if(cardOne.card === cardTwo.card){
                bell.play();
                resectSelection();
                props.handleMatchedCards(cardOne.card);
            } else {
                const index = Math.floor(Math.random() * catSounds.length);
                catSounds[index].play();
               setTimeout(resectSelection,1000);
        
            }
        }

    },[cardOne&&cardTwo])



    
    return (
        <>
     
            <div className='board'>
                <div className='board-details'>
                    <span className='level-number'>Three Levels</span>
                    <button disabled={props.disable} className='startBtn' onClick={props.handleStartBtn}>Start</button>
                </div>
                {props.running ? 
                    <div className='game'>
                        {newBoard.map((card, index)=>(
                    
                        <Cards key={index} 
                        card={card} selectedCards={selectedCards}
                        //boolean turned is used to flip the cards
                        turned = {card === cardOne || 
                        card === cardTwo || 
                        props.matchedCards.includes(card.card)}   
                        />

                        ))}
                    </div>
                : null}

            </div>

        </>
    
    );
}

export default Board;