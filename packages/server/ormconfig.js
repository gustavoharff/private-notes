require('dotenv/config');

module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "private_notes",
  entities: [
    "./src/models/*.ts"
  ],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  cli: {
    "migrationsDir": "./dist/src/database/migrations"
  }
}
