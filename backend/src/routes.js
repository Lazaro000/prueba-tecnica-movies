import { userRegisterController } from "./controller.js";

export const registerRoutes = (app) => {
  app.post("/register", userRegisterController);
};
