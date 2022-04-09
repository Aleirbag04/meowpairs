const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema(
    {
        nickname:{
            type:String,
            required: [true, 'Enter your nickname' ],
            minlength:2,
            maxlength:20
        },
        country: {
            type: String,
            required: [true, 'Please select your country']
        },
        time: {
            type: String,
            required: true
          
        }
        

    },
    { timestamps: true}
)



const Score = new mongoose.model('Score', scoreSchema)
module.exports = Score