const express = require("express");
const router = express.Router();
const Task = require("../model/task");

// GET all tasks
router.get("/", async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// CREATE task
router.post("/", async(req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
});

// UPDATE task
router.put("/:id", async(req, res) => {
    const updated = await Task.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
    );
    res.json(updated);
});

// DELETE task
router.delete("/:id", async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;