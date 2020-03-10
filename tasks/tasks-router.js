const express = require("express");
const db = require("../data/db-config");

const Tasks = require("./task-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    return res.json(await Tasks.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findById(id);

    if (task) {
      return res.status(200).json(task);
    } else {
      return res
        .status(404)
        .json({ message: "Could not find task with this Id." });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const id = await Tasks.add(req.body); //returns an array

    const task = await Tasks.findById(id);

    return res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Tasks.update(req.body, id);

    if (task) {
      res.json(task);
    } else {
      return res.status(404).json({
        message: "Could not find task with given ID"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = await db("tasks")
      .where({ id: req.params.id })
      .del();
    return res.status(200).json({ id: req.params.id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
