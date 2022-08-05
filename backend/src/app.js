import express from "express";
import { registerRoutes } from "./routes.js";

const expressApp = express();

// Middleware
expressApp.use(express.json());

registerRoutes(expressApp);

export default expressApp;
