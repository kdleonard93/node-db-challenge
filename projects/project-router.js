const express = require("express");
const db = require("../data/db-config");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    return res.json(await Projects.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await Projects.findById(id);

    if (project) {
      return res.status(200).json(project);
    } else {
      return res
        .status(404)
        .json({ message: "Could not find project with this Id." });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const id = await Projects.add(req.body);

    const project = await Projects.findById(id);

    return res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = await db("projects")
      .where({ id: req.params.id })
      .del();
    return res.status(200).json({ id: req.params.id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
