const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    studentId: {
        type: String,
        required: true,
        unique: true
    },

    course: {
        type: String
    },

    email: {
        type: String
    }
});

module.exports = mongoose.model("Student", studentSchema);