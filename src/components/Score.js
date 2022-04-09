import React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import countryFlagEmoji from 'country-flag-emoji';




const Score = props => {
    const [topTenByCountry, setTopTenByCountry]=useState([]);
    const [topTen, setTopTen]=useState([]);
    const [selectedCountry, setSelectedCountry]=useState("");
    const [typeOfScore, setTypeOfScore] = useState("all");
    const [displayCountries, setDisplayCountries] = useState(false);

    /*@top10
    @param array of scores objects
    Description: Takes all the scores, and sort it by time property ASC
    */
    const top10 = (list) =>{
        const orderList = list.sort((a, b) => {
            if (a.time < b.time){
                return -1;
            }
            if (a.time > b.time){
                return 1;
            }
            return 0;

            
        })
        const top = orderList.slice(0,10);
        return top;

    }

    //get general Top Ten
    useEffect(() => {
        if(typeOfScore === "all"){
            axios.get("/api/v1/scores")
            .then(response => {
                if(response){

                   
                    setTopTen(top10(response.data));
                }
                })
        
            .catch(error=>console.log(error))

        }

       

    },[props.showScores, typeOfScore])

   
    const handleFlags = (country) => {
       setTypeOfScore("country");
       setSelectedCountry(country);
       setDisplayCountries(false);
    }

    const handleBackBtn = () => {
      
        setTypeOfScore("all");
    }

    const handleDisplayCountries =()=> {
        setDisplayCountries(!displayCountries);
    }

    //Get top Ten by selected country
    useEffect(() => {

        const url=`/api/v1/scores/${selectedCountry}`
        console.log(url);
        axios.get(url)
                .then(response => {
                    if(response) {
                        setTopTen(top10(response.data));
                        
                    }
                })
                .catch(error=>console.log(error))
    
            },[selectedCountry])
  



    
    return (
        <>
            <div className='showScoresModal'>
                <button className='closeBtn' onClick={props.resetGame}>X</button>
               <div className='chart'>
                {typeOfScore === "all" ?
                <h2>Most Claw-ver Humans</h2>
                : <h2>Most Claw-ver Humans from {selectedCountry}</h2>}
                <div className='scores-chart'>
                    <table>
                        <tbody>
                        <tr>
                            <th>Postion</th>
                            <th>Nickname</th>
                            <th>Country</th>
                            <th>Time</th>
                        </tr>
                        {topTen.map((user, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.nickname}</td>
                                
                                <td ><img src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${countryFlagEmoji.list.find(country =>country.name ===user.country).code}.svg`}
                                alt={user.country} onClick={() =>handleFlags(user.country)}/></td>
                                <td>{user.time}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {typeOfScore === "all" ?
                        <><h4 >Not here? Click <span onClick={handleDisplayCountries}>here</span> to filter by Country</h4>
                              
                        {displayCountries ?
                        <div className='countryModal'>
                         {countryFlagEmoji.list.map((country, index) => <img className='chooseFlag' src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${country.code}.svg`} alt={country.name} onClick={() =>handleFlags(country.name)} />
                        )}
                        </div>

                       :null }
                            
                         
                        </>
                        
                    : <button className="backBtn" onClick={handleBackBtn}>&#60;</button>}
                </div>
               
                </div>
            </div>

        </>
    
    );
}

export default Score;