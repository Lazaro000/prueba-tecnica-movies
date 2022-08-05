import { createServer } from "http";
import express from "express";
import { registerUserRoutes } from "../routes/user-routes.js";
import { getEntityManager } from "./initialize-orm.js";
import { RequestContext } from "@mikro-orm/core";

export const initializeHttpServer = () => {
  const expressApp = express();

  expressApp.use((_, __, next) => {
    const entityManager = getEntityManager();
    RequestContext.create(entityManager, next);
  });

  expressApp.use(express.json());

  registerUserRoutes(expressApp);

  const httpServer = createServer(expressApp);

  return httpServer;
};
