import {
  validateEmail,
  validateId,
  validateName,
  validatePassword,
} from "../../domain/validations/user-validation.js";

export const validateRegisterBody = (body) => {
  const { id, name, email, password } = body;

  // Validar los campos
  if (!validateId(id)) return { error: "El formato del id no es correcto" };

  if (!validateEmail(email))
    return { error: "El formato del email no es correcto" };

  if (!validateName(name))
    return { error: "El formato del nombre no es correcto" };

  if (!validatePassword(password))
    return { error: "El formato del nombre no es correcto" };

  return { user: { id, name, email, password } };
};
