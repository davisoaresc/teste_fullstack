const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.USER_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.HOST_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
