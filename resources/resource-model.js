const db = require("../data/config");

module.exports = {
  find,
  findByID,
  add,
  remove
};

function find() {
  return db("resources");
}

function findByID(id) {
  return db("resources").where({ id });
}

function add(resources) {
  return db("resources").insert(project);
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
