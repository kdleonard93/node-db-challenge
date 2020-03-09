exports.up = async function(knex) {
  await knex.schema.createTable("projects", table => {
    table.increment("id").primaryKey();
    table.text("name").notNull();
    table.text("description");
    table.boolean("completed").notNull(false);
  });

  await knex.schema.createTable("resource", table => {
    table.increment("id").unique();
    table.text("name").notNull();
    table.text("description");
  });

  await knex.schema.createTable("tasks", table => {
    table.increment("id").unique();
    table.text("description").notNull();
    table.text("notes");
    table.boolean("completed").notNull(false);
  });
};

exports.down = async function(knex) {};
