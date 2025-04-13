// import { TypeormLogger } from "@src/common/utils/typeorm-logger.utils";
import * as dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";

dotenv.config();
export const databaseConfig: DataSourceOptions = {
  type: "mysql",
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  username: process.env.MYSQLUSERNAME,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  poolSize: 1,
//   logger: new TypeormLogger(),
  entities: ["dist/**/*.entity{.ts,.js}", "dist/**/**/*.entity{.ts,.js}"], //regix for entity loading
  subscribers: ["dist/**/*.subscriber{.ts,.js}"],
  synchronize: false, //always do this false otherwise this will alter the table according to import entitie.
};