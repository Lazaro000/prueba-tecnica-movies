import { MikroORM } from "@mikro-orm/core";
import { mikroORMConfig } from "./mikro-orm.config.js";

let orm, entityManager;

const configDDBB = async () => {
  const schemaGenerator = orm.getSchemaGenerator();
  await schemaGenerator.updateSchema();
};

export const initializeOrm = async () => {
  orm = await MikroORM.init(mikroORMConfig);
  const isConnected = await orm.isConnected();

  if (!isConnected) throw new Error("Failed to connect to database");

  await configDDBB();

  entityManager = orm.em;
  console.log(entityManager);
};

export const getEntityManager = () => {
  return entityManager;
};
