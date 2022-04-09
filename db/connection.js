const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"));

module.exports = mongoose.connection;