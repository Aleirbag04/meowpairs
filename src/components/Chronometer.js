import React from 'react';
import { useState, useEffect } from 'react';

/*
    @formatTime
    @params time in miliseconds
    Description: takes the time in miliseconds, get minutes first and then with the rest gets seconds
    Then adds 0 at the front in case the amount of minutes or seconds is less than 10.
    returns a string 'nn:nn'

*/

const formatTime = miliseconds =>{

        
        let mins = parseInt(miliseconds/1000/60);
        miliseconds -= mins *60*1000;
        let secs = miliseconds/1000;
    
        mins = mins < 10 ? "0"+mins : mins;
        secs = secs <10 ? "0"+secs : secs;
    
        return `${mins}:${secs}`;
}



const Chronometer = props => {
    


    useEffect(function startChronometer(){


        if (props.running){
  
            const start = () =>{
 
                props.handleChronometer(props.time);
               
     
            }
            
            //Every 1 seconds updates the time state
            let reloader = setInterval(start,1000);
            start();
            

            return function stopChronometer() {
                clearInterval(reloader);
                
                
            }
        }

},[props.running]);

useEffect(() =>{
    const score = formatTime(props.time);
    props.handleScoreTime(score);
},[props.time]);


    
    return (
        <>
            <div className='wrapper'>
    <div className="ring">
        <svg width="100" height="100"  viewBox ="0 0 100 100">
        <circle strokeWidth ="5px" cx="50" cy="50" r="50" fill="hotpink"/>
        </svg>
    </div>
    <div className="timer">
        <div className="time">
            {formatTime(props.time)}
           
            
        </div>

    </div>
</div>

        </>
    
    );
}

export default Chronometer;