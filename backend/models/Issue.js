const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },

    isbn: {
        type: String,
        required: true
    },

    issueDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model("Issue", issueSchema);