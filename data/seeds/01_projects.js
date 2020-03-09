exports.seed = async function(knex) {
  await knex("projects").insert([
    { id: "1", name: "Gaming", description: "The best", completed: false },
    { id: "2", name: "Coding", description: "The hardest", completed: false },
    { id: "3", name: "Cooking", description: "The delicious", completed: false }
  ]);
};
