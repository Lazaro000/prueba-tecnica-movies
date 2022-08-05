import { UserRepository } from "../../infrastructure/repositories/user-repository.js";
import { ConflictException } from "../erros/conflict.exception.js";
import { UnauthorizedException } from "../erros/unauthorized.exception.js";

export const registerUserService = async (user) => {
  const userRepository = new UserRepository();

  const existingUserById = await userRepository.findById(user.id);
  if (existingUserById) throw new ConflictException("Identificador duplicado");

  const existingUserByEmail = await userRepository.findByEmail(user.email);
  if (existingUserByEmail)
    throw new ConflictException("El email ya está en uso");

  await userRepository.create(user);
  await userRepository.commit();
};

export const loginUserService = async (email, password) => {
  const userRepository = new UserRepository();

  const existingUserByEmail = await userRepository.findByEmail(email);

  if (!existingUserByEmail || existingUserByEmail.password !== password)
    throw new UnauthorizedException("Las credenciales son incorrectas");

  return existingUserByEmail.id;
};
