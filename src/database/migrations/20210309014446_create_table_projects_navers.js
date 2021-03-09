
exports.up = function(knex) {
    return knex.schema.createTable('projects_navers', table=>{
        table.increments('id').primary();
        table.integer('project_id').unsigned().notNullable();
        table.integer('naver_id').unsigned().notNullable();

        table.foreign('project_id').references('id').inTable('projects');
        table.foreign('naver_id').references('id').inTable('navers');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects_navers');
  };
  