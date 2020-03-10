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
  return db("tasks").where({ id });
}

function add(tasks) {
  return db("tasks")
    .insert(tasks)
    .where({ project_id })
    .first();
}

function remove(id) {
  return db("tasks")
    .where({ id })
    .del();
}
