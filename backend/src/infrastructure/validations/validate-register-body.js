import {
  validateEmail,
  validateId,
  validateName,
  validatePassword,
} from "../../domain/validations/user-validation.js";
import { BadRequestException } from "../errors/bad-request.exception.js";

export const validateRegisterBody = (body) => {
  const { id, name, email, password } = body;

  // Validar los campos
  if (!validateId(id))
    throw new BadRequestException("El formato del id no es correcto");

  if (!validateEmail(email))
    throw new BadRequestException("El formato del id no es correcto");

  if (!validateName(name))
    throw new BadRequestException("El formato del id no es correcto");

  if (!validatePassword(password))
    throw new BadRequestException("El formato del id no es correcto");

  return { id, name, email, password };
};
