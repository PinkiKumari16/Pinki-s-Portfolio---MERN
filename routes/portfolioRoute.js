const router = require("express").Router();
const IntroModel = require("../models/IntroModel");
const AboutModel = require("../models/AboutModel");
const ExperienceModel = require("../models/ExperienceModel");
const ProjectModel = require("../models/ProjectModel");
const CourseModel = require("../models/CourseModel");
const CotactModel = require("../models/ContactModel");

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

module.exports = router;
