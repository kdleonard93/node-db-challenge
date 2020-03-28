const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projects/project-router");
const resourceRouter = require("./resources/resource-router");
const tasksRouter = require("./tasks/tasks-router");

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());

server.use("/project", projectRouter);
server.use("/resource", resourceRouter);
server.use("/tasks", tasksRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "WHHHOOOPPPSSSIIIEESSSSSS!!!!!"
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
