const mongoose = require("mongoose");

const experienceSchema = {
  title: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
};

module.exports = mongoose.model("ExperienceModel", experienceSchema);
