const tableName = 'users'

exports.up = knex => {
  return knex.schema.createTable(tableName, 
    table => {
      table.increments('id').primary();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
    });
};

exports.down = knex => {
  return (
    knex.schema.dropTable(tableName)
  );
};
