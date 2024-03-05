const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = mongoose.model('Project');

router.post('', async (req, res) => {
    const { title, body, date, starred = false, github, thumbnail, link } = req.body;
    if (!title || !body || !github || !thumbnail || !link) {
        return res.status(422).json({ message: "Missing items" });
    }
    let project = new Project({ title, body, date, starred, github, thumbnail, link });
    if (project.validateSync()) {
        return res.status(422).json({ message: "Improper format for data" });
    }
    try {
        await project.save();
        return res.json({ message: "Project created successfully", id: project._id });
    } catch (error) {
        console.error("Failed to create project", error);
        res.status(500).json({ message: "Failed to create project", });
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(422).json({ message: "Project ID is not set or is not valid" });
    }
    let project, error = await Project.findById(id);
    if (error) {
        console.error("Failed to find project", error);
        return res.status(422).json({ message: "Failed to find project" });
    } else {
        return res.json(project);
    }

})

router.get('', async (req, res) => {
    const { starred = false } = req.query;
    console.log(starred);
    try {
        let projects = await Project.find({ starred }).exec();
        return res.json(projects);
    }   catch (error) {
        console.error("Failed to find project", error);
        return res.status(500).json({ message: "Failed to find project" });
    }
})



module.exports = router;