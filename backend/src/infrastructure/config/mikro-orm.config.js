import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { userSchema } from "../schemas/user-schema.js";

/** @type {import('@mikro-orm/core').Options} */
export const mikroORMConfig = {
  port: process.env.POSTGRESQL_PORT,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  entities: [userSchema],
  dbName: "postgres",
  type: "postgresql",
  debug: false,
  highlighter: new SqlHighlighter(),
};
