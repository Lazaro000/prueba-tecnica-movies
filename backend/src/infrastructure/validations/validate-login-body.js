import {
  validateEmail,
  validatePassword,
} from "../../domain/validations/user-validation";

export const validateLoginBody = (body) => {
  const { email, password } = body;

  if (!validateEmail(email) || !validatePassword(password))
    return { error: "Las credenciales son incorrectas" };

  return { loginData: { email, password } };
};
