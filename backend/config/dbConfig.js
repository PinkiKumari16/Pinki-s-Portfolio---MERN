require("dotenv").config();
const mongoose = require('mongoose');
// console.log("************", process.env.mongodb_url);

mongoose.connect(process.env.mongodb_url, {
    dbName: 'Portfolio_data'
});

const connection = mongoose.connection;
connection.on("error", ()=>{
    console.log("Error connecting to data-base");
})
connection.on("connected", ()=>{
    console.log("Mongo DB connection successfully...")
})

module.exports = connection;