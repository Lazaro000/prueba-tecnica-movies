const users = [];

export const findUserById = (id) => users.find((user) => user.id === id);

export const findUserByEmail = (email) =>
  users.find((user) => user.email === email);

export const addUser = (user) => users.push(user);
