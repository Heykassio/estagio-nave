// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    database: 'nave',
    user: 'postgres',
    password: '061914'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`,
  }
}