const { countriesList } = require('./countries');

const countries = require('./countries').countriesList;



const validatorMiddleware = (req,res,next)=>{
 
    const selectedCountry=req.params.country
    
    if (countriesList.includes(selectedCountry)===false){
        res.status(404).send('Invalid Country');;
    }
    

    else {
        next();
    }
}






module.exports={validatorMiddleware}