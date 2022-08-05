import { MikroORM } from "@mikro-orm/core";
import { mikroORMConfig } from "./mikro-orm.config.js";

let orm;

const configDDBB = async () => {
  const schemaGenerator = orm.getSchemaGenerator();
  await schemaGenerator.updateSchema();
};

export const initializeOrm = async () => {
  orm = await MikroORM.init(mikroORMConfig);
  const isConnected = await orm.isConnected();

  if (!isConnected) throw new Error("Failed to connect to database");

  await configDDBB();
};

export const getEntityManager = () => {
  if (!orm) throw new Error("Database is not connected");
  return orm.em.fork();
};
