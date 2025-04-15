const router = require("express").Router();
const IntroModel = require("../models/IntroModel");
const AboutModel = require("../models/AboutModel");
const ExperienceModel = require("../models/ExperienceModel");
const ProjectModel = require("../models/ProjectModel");
const CourseModel = require("../models/CourseModel");
const CotactModel = require("../models/ContactModel");
const { Router } = require("express");
const ContactModel = require("../models/ContactModel");
const admindatas = require("../models/usersModel");
const { upload } = require('../multerStorage');

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
router.post("/update-about", upload.single('developerImage'), async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);
    if(!req.file){
      return res.status(400).send({success: false, message: "No file uploaded."});
    }
    const file = req.file;
    console.log("uploaded file **********",file);

    const updateData = {
      ...req.body,
      developerImage: file.path,
    };

    const newAboutData = await AboutModel.findOneAndUpdate(
      { _id: req.body._id },
      updateData,
      { new: true }
    );
    res.status(200).send({
      data: newAboutData,
      success: true,
      message: "About Data Updated Successfully.",
    });
  } catch (error) {
    console.error("Error:", error);
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
    const updatedProjectData = await ProjectModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
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

// Courses operations
router.post("/course-add", async (req, res) => {
  try {
    const addedCourseData = await CourseModel.insertOne(req.body);
    res.status(200).send({
      data: addedCourseData,
      success: true,
      message: "New Course Added Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/course-edit", async (req, res) => {
  try {
    const editedCourseData = await CourseModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: editedCourseData,
      success: true,
      message: "Course Edit Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/course-delete", async (req, res) => {
  try {
    const deletedCourseData = await CourseModel.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: deletedCourseData,
      success: true,
      message: "Course Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Contact operation
router.post("/contact-update", async (req, res) => {
  try {
    const editedContactData = await ContactModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: editedContactData,
      success: true,
      message: "Contact Data Updated Successfully.",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// get admin data
router.post("/admin-login", async (req, res) => {
  try {
    const adminData = await admindatas.findOne({
      userName: req.body.userName,
      password: req.body.password,
    });
    adminData.password = "";
    if (adminData) {
      res.status(200).send({
        data: adminData,
        success: true,
        message: "Admin Login Successfully.",
      });
    } else {
      res.status(500).send({
        data: adminData,
        success: false,
        message: "Invalid UserName Or Password.",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
