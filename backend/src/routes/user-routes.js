import { userRegisterController } from "../controllers/user-controller.js";

export const registerUserRoutes = (app) => {
  app.post("/register", userRegisterController);
};
