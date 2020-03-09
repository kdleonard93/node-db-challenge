const express = require("express");
const project = require("./project-model");
const router = express.Router();

router.get("/", (req, res, next) => {
  project.find().then(project => {});
});

module.exports = router;
