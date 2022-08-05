import { createServer } from "http";
import express from "express";
import { registerUserRoutes } from "./routes/user-routes.js";

const expressApp = express();

// Middleware
expressApp.use(express.json());

registerUserRoutes(expressApp);

export const httpServer = createServer(expressApp);
