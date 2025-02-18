const mongoose = require('mongoose');

const contactSchema = ({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    contactImage: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CotactModel", contactSchema);