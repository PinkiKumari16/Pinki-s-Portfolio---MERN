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
    const introData = await IntroModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: introData,
      success: true,
      message: "Intro updated successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update about data
router.post("/update-about", async (req, res) => {
  try {
    const newAboutData = await AboutModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: newAboutData,
      success: true,
      message: "About Data Updated Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//  experiences operations
router.post("/experience-add", async (req, res) => {
  try {
    const addedExperienceData = await ExperienceModel.insertOne(req.body);
    res.status(200).send({
      data: addedExperienceData,
      success: true,
      message: "New Experience Added Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/experience-delete", async (req, res) => {
  try {
    const deletedExperience = await ExperienceModel.deleteOne({
      _id: req.body._id,
    });
    res.status(200).send({
      data: deletedExperience,
      success: true,
      message: "Experience Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/experience-edit", async (req, res) => {
  try {
    const editExperienceData = await ExperienceModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: editExperienceData,
      success: true,
      message: "Experience Data Updated Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// project operations
router.post("/project-add", async (req, res) => {
  try {
    const newAddedProjectData = await ProjectModel.insertOne(req.body);
    res.status(200).send({
      data: newAddedProjectData,
      success: true,
      message: "New Project Added Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/project-delete", async (req, res) => {
  try {
    const deletedProjectData = await ProjectModel.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: deletedProjectData,
      success: true,
      message: "Project Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/project-edit", async (req, res) => {
  try {
    const updatedProjectData = await ProjectModel.findOneAndUpdate({
      _id: req.body._id,
      ...req.body,
    });
    res.status(200).send({
      data: updatedProjectData,
      success: true,
      message: "Project Data Updated Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/get-one-project-data/:id", async (req, res) => {
  try {
    const oneProjectData = await ProjectModel.findOne({ _id: req.params.id });
    res.status(200).send({
      data: oneProjectData,
      success: true,
      message: "Get One Project Data Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
