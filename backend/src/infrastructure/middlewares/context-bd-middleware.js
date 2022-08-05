import { RequestContext } from "@mikro-orm/core";
import { getEntityManager } from "../config/initialize-orm.js";

export const contextBdMiddleware = (_, __, next) => {
  const entityManager = getEntityManager();
  RequestContext.create(entityManager, next);
};
