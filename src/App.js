import React, { useState, useEffect } from 'react';
import Funfact from './components/Funfact';
import Footer from './components/Footer';
import Chronometer from './components/Chronometer';
import Board from './components/Board';
import CompletedLevel from './components/CompletedLevel';
import SaveScore from './components/SaveScore';
import Score from './components/Score';


const App = props => {
    //set Initial pairs
    const initialPairs=4;
    const [running, setRunning]=useState(false);
    const [disable, setDisable] = useState(false);
    const [time, setTime]=useState(0);
    const [matchedCards, setMatchedCards]= useState([]);
    const [levelStatus, setLevelStatus]=useState(false);
    const [pairs, setPairs] = useState(initialPairs);
    const [endGame, setEndGame] = useState(false);
    const [scoreTime, setScoreTime]= useState(0);
    const [showScores, setShowScores] = useState(false);



    

    const handleStartBtn = (event) =>{
        setRunning(!running);
        setDisable(!disable);
     }

     const handleChronometer = (time) => {
        setTime(time => time +1000);
     }



     const handleLevelStatus = () =>{
         //Only 3 levels. Each level adds 2 pair of cards. After 4 cards added the game ends
        if (pairs < initialPairs+4){ 
            setLevelStatus(!levelStatus);
            handleStartBtn();
            console.log('levelStatus');
        } else{
            console.log("End Game");
            setEndGame(!endGame);
        }
     }

     const handleContinueBtn = (event) =>{
     
        handleLevelStatus();
        setMatchedCards([]);
        setPairs(pairs+2);

     }

     const handleMatchedCards = (matchedCard) => {

         setMatchedCards([...matchedCards, matchedCard]);
     }

     const handleScoreTime = (time) => {
         setScoreTime(time);
     }

     useEffect(() => {

        if(matchedCards.length === pairs){
            //game complete
            setTimeout(handleStartBtn, 2500);
            setTimeout(handleLevelStatus,3500);
        }


    },[matchedCards])

    const handleShowScores = () =>{
        setEndGame(!endGame);
        setShowScores(!showScores);

    }

    //set all the states to initial position
    const resetGame = () => {
        setMatchedCards([]);
        setPairs(initialPairs);
        setScoreTime(0);
        setShowScores(!showScores);
        setTime(0);
        setDisable(!disable);
    }

    
    
    return (
        <>
            <div className='gameContainer'>
      
                <div className='header'>
                    <h1>MEOW PAIRS</h1>
                    <Chronometer 
                        running={running}
                        handleScoreTime={handleScoreTime}
                        handleChronometer={handleChronometer}
                        time={time} />
                </div>

                <Board 
                    handleStartBtn={handleStartBtn} 
                    running={running} 
                    pairs={pairs} 
                    handleMatchedCards={handleMatchedCards} 
                    matchedCards={matchedCards}
                    disable={disable}/>
                 {!running && scoreTime==="00:00" ? 
                <Funfact/>
                : null}
                {levelStatus ? 
                    <CompletedLevel 
                    handleContinueBtn={handleContinueBtn}/>
                    : null}
                {endGame ?
                <SaveScore scoreTime={scoreTime} handleShowScores={handleShowScores}/>
                : null}
                {showScores ?
                <Score  showScores={showScores} resetGame={resetGame}/>
                : null}
            </div>
            <Footer />

        </>
    
    );
}

export default App;