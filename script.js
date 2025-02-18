// require("dotenv").config();
const express = require('express');
const app = express();
const dbConfig = require("./config/dbConfig");
const IntroModel = require('./models/IntroModel');
const AboutModel = require('./models/AboutModel');
const ExperienceModel = require('./models/ExperienceModel');
const ProjectModel = require('./models/ProjectModel');
const CourseModel = require('./models/CourseModel');
const CotactModel = require('./models/ContactModel');

const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log(`server is running port on ${port} .................`);
})




// app.get('/user', async(req, res)=>{
//     const userData = await usersModel.insertOne({
//         name: "RInki",
//         age: 23
//     });
//     console.log("*** user data ***** ", userData);
// })