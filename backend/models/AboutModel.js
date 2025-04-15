const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
  developerImage: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("AboutModel", aboutSchema);
