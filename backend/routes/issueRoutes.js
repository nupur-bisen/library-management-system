const express = require("express");
const router = express.Router();

const Issue = require("../models/Issue");

router.post("/", async (req, res) => {
    try {
        const { studentId, isbn } = req.body;

        const issue = new Issue({
            studentId,
            isbn
        });

        await issue.save();

        res.status(201).json({
            message: "Book issued successfully!",
            issue
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Book issue nahi hua"
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const issues = await Issue.find();
        res.json(issues);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Issued books load nahi hue"
        });
    }
});
router.put("/:id/return", async (req, res) => {
    try {
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
router.post("/:id/return", async (req, res) => {
    try {
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
router.post("/:id/return", async (req, res) => {
    try {
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
            issue: issue
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Book return nahi hui"
        });
    }
});

module.exports = router;