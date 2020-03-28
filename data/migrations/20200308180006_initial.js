exports.up = async function(knex) {
  await knex.schema.createTable("projects", table => {
    table.increments("id").unique();
    table.text("name").notNull();
    table.text("description");
    table
      .boolean("completed")
      .notNull()
      .default(false);
  });

  await knex.schema.createTable("resource", table => {
    table.increments("id").unique();
    table
      .text("name")
      .notNull()
      .unique();
    table.text("description");
  });

  await knex.schema.createTable("tasks", table => {
    table.increments("id").unique();
    table.text("description").notNull();
    table.text("notes");
    table
      .boolean("completed")
      .notNull()
      .default(false);
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE");
  });
  await knex.schema.createTable("project_resources", table => {
    table
      .integer("project_id")
      .references("id")
      .inTable("projects"),
      table
        .integer("resource_id")
        .references("id")
        .inTable("projects");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resource");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resource");
  await knex.schema.dropTableIfExists("project");
};
