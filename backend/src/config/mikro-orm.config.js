import { userSchema } from "../entities/user.js";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";

/** @type {import('@mikro-orm/core').Options} */
export const mikroORMConfig = {
  port: process.env.POSTGRESQL_PORT,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  entities: [userSchema],
  dbName: "postgres",
  type: "postgresql",
  debug: true,
  highlighter: new SqlHighlighter(),
};
