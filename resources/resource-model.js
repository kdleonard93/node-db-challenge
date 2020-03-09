const knex = require("knex");
const db = require("../data/config");

module.exports = {
  find,
  findByID,
  add
};

function find() {
  return db("resources");
}

function findByID(id) {
  return db("resources")
    .where({ project_id })
    .first();
}

function add(resources) {
  return db("resources").insert(project);
}

function remove() {
  return db("projects"), where({ id }).del();
}
