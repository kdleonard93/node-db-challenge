exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      id: "1",
      name: "Beat LVL",
      description: "Defeat the boss",
      notes: "secrete sword in the cave",
      completed: false,
      project_id: "1"
    },
    {
      id: "2",
      name: "Use skill points",
      description: "Gained a lvl and need to spend points",
      notes: "Beef up mana pool",
      completed: false,
      project_id: "1"
    },
    {
      id: "3",
      name: "Beat LVL",
      description: "Defeat the boss",
      notes: "secrete sword in the cave",
      completed: false,
      project_id: "2"
    },
    {
      id: "4",
      name: "Beat LVL",
      description: "Defeat the boss",
      notes: "secrete sword in the cave",
      completed: false,
      project_id: "2"
    },
    {
      id: "5",
      name: "Beat LVL",
      description: "Defeat the boss",
      notes: "secrete sword in the cave",
      completed: false,
      project_id: "3"
    },
    {
      id: "6",
      name: "Beat LVL",
      description: "Defeat the boss",
      notes: "secrete sword in the cave",
      completed: false,
      project_id: "3"
    }
  ]);
};
