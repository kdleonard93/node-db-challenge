const db = require("../data/config");
module.exports = {
  find,
  findByID,
  add,
  remove
};

function find() {
  return db("projects");
}

function findByID(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(project) {
  return db("projects").insert(project);
}

function remove() {
  return db("projects")
    .where({ id })
    .del();
}
