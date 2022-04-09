import axios from 'axios';
import React from 'react';
import {  useState } from 'react';
import countryFlagEmoji from 'country-flag-emoji';


const message = [
    'Oh my Meow! You are Paw-Some!',
    'Purr-Don Me? Have you finished?',
    'What the Meow! You are Claw-ver',
    'MOL (Meow out loud). That was Chessy Peasy!',
    'Are you a cat? So Claw-ver to be human',
    'Are you Kitten me? You got the Paw-er! '
]




const SaveScore = props => {

    const [nickname, setNickname] = useState("");
    const [country, setCountry] = useState("");


    const handleNickname = (event) => {
        setNickname(event.target.value);
    };
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        
    };

    const handleAddScore = (event) => {
        event.preventDefault();

        const score ={
            nickname: nickname,
            country: country, 
            time: props.scoreTime
        }
        
       
        axios.post("/api/v1/scores", score)
        .then(results => {
            console.log(results.data);
        }).then(
            props.handleShowScores
        )
        .catch(error=>console.log(error));
        setTimeout(props.handleShowScores,2000);
    }

 

    
    return (
        <>
            <div className='scoreModal'>
                <div className='msg'>{message[Math.floor(Math.random()*message.length)]}</div>
                <h2>Save your Score</h2>
                <form onSubmit={event=>handleAddScore(event)}>
                    <label> Nickname:
                    <input type="text" name="nickname"  onChange={event=>handleNickname(event)}/>
                    </label>
                    <label>Country:
                        <select className='countrySelector' 
                            name="country" id="countrySelector"
                            onChange={handleCountryChange}>
                           
                            {countryFlagEmoji.list.map((country, index) =>
                            <option key={index} value={country.name}>{country.name}</option>
                            )}
                        </select>

                    </label>
                    <label>Time:
                        <input className="scoreTime" type="text" name="time" value={props.scoreTime} readOnly/>

                    </label>
                    <button className='startBtn saveBtn' onClick={props.handleSaveBtn} >Save Meow</button>
           
           </form>
              
            </div>

        </>
    
    );
}

export default SaveScore;