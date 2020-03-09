const knex = require("knex");
const db = require("../data/config");

module.exports = {
  find,
  findById,
  add,
  remove
};

function find() {
  return db("task");
}

function finByID(id) {
  return db("tasks").where({ project_id });
}

function add(tasks) {
  return db("tasks").insert(project);
}

function remove() {
  return db("projects").where({ project_id });
}
