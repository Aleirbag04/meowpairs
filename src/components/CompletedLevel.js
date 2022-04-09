import React from 'react';

const message = [
    'Purr-fect!',
    'Fur-midable!',
    'So Claw-ver!',
    'Paw-some!',
    'Claw-some!'

]


const CompletedLevel = props => {


    
    return (
        <>
            <div className='modal'>
                <div className='msg'>{message[Math.floor(Math.random()*message.length)]}</div>
                <button className='startBtn continueBtn' onClick={props.handleContinueBtn}>Cat-tinue</button>
            </div>

        </>
    
    );
}

export default CompletedLevel;