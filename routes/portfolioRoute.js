const router = require("express").Router();
const IntroModel = require("../models/IntroModel");
const AboutModel = require("../models/AboutModel");
const ExperienceModel = require("../models/ExperienceModel");
const ProjectModel = require("../models/ProjectModel");
const CourseModel = require("../models/CourseModel");
const CotactModel = require("../models/ContactModel");
const { Router } = require("express");

// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const introData = await IntroModel.find();
    const aboutData = await AboutModel.find();
    const experienceData = await ExperienceModel.find();
    const projectData = await ProjectModel.find();
    const courseData = await CourseModel.find();
    const contactData = await CotactModel.find();

    res.status(200).send({
      intro: introData[0],
      about: aboutData[0],
      projects: projectData,
      courses: courseData,
      experiences: experienceData,
      contact: contactData[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update Intro data
router.post("/update-intro", async (req, res) => {
  try {
    // console.log(req.body);
    const introData = await IntroModel.findOneAndUpdate(
        {_id: req.body._id},
        req.body,
        {new: true}
    );
    res.status(200).send({
        data: introData,
        success: true,
        message: "Intro updated successfully."
    })
  } catch (error) {
    res.status(500).send(error);
  }
});


// update about data

router.post("/update-about", async (req, res)=>{
  try {
    const newAboutData = await AboutModel.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    );
    res.status(200).send({
      data: newAboutData,
      success: true,
      message: "About Data Updated Successfully."
    })
  }catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;
