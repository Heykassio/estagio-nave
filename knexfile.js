// Update with your config settings.
const config = require('./config');

module.exports = {
  client: 'pg',
  connection: {
    host: config.dbHost,
    port: config.port,
    database: 'nave',
    user: config.dbUser,
    password: config.dbPassword
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`,
  },

  seeds: {
    directory: `${__dirname}/src/database/seeds`,
  }
}