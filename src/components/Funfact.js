import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';


const Funfact = props => {

    const [funFact, setFunFact] = useState("");
    const [funFactError, setFunFactError] = useState(false);
    


    //Shows a Fun fact fetched from external API
    useEffect(() => {
        
    
              axios.get('https://meowfacts.herokuapp.com/')
                 .then(result =>{
                    
                    if(result.data.data ==='To unsubscribe from catfacts, reply the following code: tj3G5de$se' || result.data.data.lenght > 250){
                        setFunFactError(!funFactError);

                    }else {
                        setFunFact(result.data.data);
                        
                    }
                  
                    
                
                  })
            
                .catch(error=>console.log(error));
        
    },[funFactError]);
    
    
    
    return (
        <>
            <div className='funFactModal'>
            <h4>{funFact}</h4>
            </div>

        </>
    
    );
}

export default Funfact;