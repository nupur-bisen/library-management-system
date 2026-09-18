const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/library")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

// Routes
const studentRoutes = require("./routes/studentRoutes");
const bookRoutes = require("./routes/bookRoutes");
const issueRoutes = require("./routes/issueRoutes");
console.log("ISSUE ROUTES LOADED");

app.use("/api/students", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/issues", issueRoutes);
app.post("/api/issues/:id/return", async (req, res) => {
    try {
        const Issue = require("./models/Issue");

        const issue = await Issue.findById(req.params.id);

        if (!issue) {
            return res.status(404).json({
                message: "Issued book nahi mili"
            });
        }

        issue.returnDate = new Date();
        await issue.save();

        res.json({
            message: "Book returned successfully!",
            issue
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Book return nahi hui"
        });
    }
});

// Home
app.get("/", (req, res) => {
    res.send("Library management system is running");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
