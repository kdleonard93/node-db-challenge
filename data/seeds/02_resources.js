exports.seed = async function(knex) {
  await knex("resources").insert([
    { id: "1", name: "Guide Books", description: "A walkthrough of the game." },
    {
      id: "2",
      name: "Online courses",
      description:
        "Lmabda, Udemy, and other online resources are great ways tom learn."
    },
    { id: "3", name: "Cook Books", description: "Recipe book with directions." }
  ]);
};
