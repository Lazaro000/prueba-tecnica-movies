import express from "express";
import { config as dotenvConfig } from "dotenv";
import { registerRoutes } from "./routes.js";

dotenvConfig();

const expressApp = express();

// Middleware
expressApp.use(express.json());

registerRoutes(expressApp);

export default expressApp;
