import { User } from "./entities/user.js";

export const findUserById = async (entityManager, id) => {
  const userRepository = entityManager.getRepository(User);
  const user = await userRepository.findOne({ id });

  return user;
};

export const findUserByEmail = async (entityManager, email) => {
  const userRepository = entityManager.getRepository(User);
  const user = await userRepository.findOne({ email });

  return user;
};

export const addUser = async (entityManager, user) => {
  const userRepository = entityManager.getRepository(User);
  const newUser = await userRepository.create(user);
  userRepository.persist(newUser);
};
