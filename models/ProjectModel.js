const mongoose = require("mongoose");

const projectSchema = {
  projectName: {
    type: String,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  technology: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
};

module.exports = mongoose.model("ProjectModel", projectSchema);
