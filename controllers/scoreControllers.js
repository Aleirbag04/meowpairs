const Score = require("../models/Score.js");


const postScore = (req,res)=>{
 
    let score = new Score({
        nickname:req.body.nickname,
        country:req.body.country,
        time:req.body.time
    });
    score.save() 
        .then(result=>{
           res.status(201).json(score);
        }) 
        .catch(error=>res.status(500).send(error));
        
}

const getScores = (req,res)=>{
 
    Score.find({})
    .select('nickname country time')
    .exec()
    .then(results=>{
        res.status(200).json(results);
    })
    .catch(error=>res.status(500).send(error));
}

const getScoreByCountry = (req,res) => {
    Score.find(req.params)
    .select('nickname country time')
    .exec()
    .then(results => {
        res.status(200).json(results);
    })
    .catch(error=>res.status(500).json(error));
}


module.exports= {
    postScore,
    getScores,
    getScoreByCountry
 
}