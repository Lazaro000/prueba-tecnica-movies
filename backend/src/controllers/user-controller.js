import { validateRegisterBody } from "../validations/validate-register-body.js";
import { findUserById, findUserByEmail, addUser } from "../db.js";
import { getEntityManager } from "../config/initialize-orm.js";

export const userRegisterController = async (req, res) => {
  // Validación de campos
  const { user, error } = validateRegisterBody(req.body);
  if (error) return res.status(400).send(error);

  const entityManager = getEntityManager();

  const existingUserById = await findUserById(entityManager, user.id);
  if (existingUserById) return res.status(409).send("Identificador duplicado");

  const existingUserByEmail = await findUserByEmail(entityManager, user.email);
  if (existingUserByEmail)
    return res.status(409).send("El email ya está en uso");

  await addUser(entityManager, user);
  await entityManager.flush();

  return res.send("El usuario se ha registrado de forma correcta");
};
