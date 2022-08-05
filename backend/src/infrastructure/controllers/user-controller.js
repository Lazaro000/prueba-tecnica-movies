import {
  registerUserService,
  loginUserService,
} from "../../application/services/user-services.js";
import { validateLoginBody } from "../validations/validate-login-body.js";
import { validateRegisterBody } from "../validations/validate-register-body.js";
import jwt from "jsonwebtoken";

export const userRegisterController = async (req, res, next) => {
  try {
    const user = validateRegisterBody(req.body);
    await registerUserService(user);

    return res.send("El usuario se ha registrado de forma correcta");
  } catch (err) {
    return next(err);
  }
};

export const userLoginController = async (req, res, next) => {
  try {
    const { email, password } = validateLoginBody(req.body);
    const id = await loginUserService(email, password);

    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
      algorithm: "HS512",
      expiresIn: "7d",
    });

    res.cookie("jwt", token, { maxAge: 900000, httpOnly: true });

    return res.send("Login correcto");
  } catch (err) {
    return next(err);
  }
};
