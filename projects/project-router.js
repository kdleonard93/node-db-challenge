const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("projects"));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
