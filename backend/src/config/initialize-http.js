import { createServer } from "http";
import express from "express";
import { registerUserRoutes } from "../routes/user-routes.js";

export const initializeHttpServer = () => {
  const expressApp = express();

  expressApp.use(express.json());

  registerUserRoutes(expressApp);

  const httpServer = createServer(expressApp);

  return httpServer;
};
