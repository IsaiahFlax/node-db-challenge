exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('resources', tbl => {
      // creates a primary key called id
      tbl.increments();
      tbl.string('name').notNullable().unique()
      tbl.string('description')
      
    }).createTable('projects', tbl => {
        // creates a primary key called id
        tbl.increments();
        tbl.string('name').notNullable()
        tbl.string('description')
        tbl.boolean('completed').defaultTo('false')

      }).createTable('tasks', tbl => {
        // creates a primary key called id
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
// this table must exist already
        .inTable('projects')
        tbl.string('description').notNullable()
        tbl.string('notes')
        tbl.boolean('completed').defaultTo('false')
      })
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
  };