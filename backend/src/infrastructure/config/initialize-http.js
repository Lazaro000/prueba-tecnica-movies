import { createServer } from "http";
import express from "express";
import { registerUserRoutes } from "../routes/user-routes.js";
import { contextBdMiddleware } from "../middlewares/context-bd-middleware.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";

export const initializeHttpServer = () => {
  const expressApp = express();

  expressApp.use(contextBdMiddleware);

  expressApp.use(express.json());

  registerUserRoutes(expressApp);

  expressApp.use(errorMiddleware);

  const httpServer = createServer(expressApp);

  return httpServer;
};
