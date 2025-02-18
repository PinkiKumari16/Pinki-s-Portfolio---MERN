const mongoose = require('mongoose');

const courseSchema = ({
    courseName: {
        type: String,
        required: true
    },
    courseImage: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("CourseModel", courseSchema);