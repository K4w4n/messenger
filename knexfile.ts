import { Knex } from "knex";
import { dbConfig } from "./src/config";


const knexConfig: Knex.Config = {
  client: 'mysql2',
  connection: {
    database: dbConfig.database,
    user: dbConfig.user,
    password: dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

export default knexConfig;