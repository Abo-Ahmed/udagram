import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  // 'postgres://postgres:postgres@database-1.cfk009rrsstw.us-east-1.rds.amazonaws.com:5432/postgres'
  "postgres://" + config.username + ":" + config.password + "@" + config.host + ":" + config.dbPort + "/" + config.database 

  );

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.dbPort,
//   dialect: "postgres",
//   storage: ":memory:",
// });
