import uuid from "uuid-random";
const { test: validateUuid } = uuid;

// Regex validations
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^([A-Z\-\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]){2,30}$/i;

export const validateId = (id) =>
  id && typeof id === "string" && validateUuid(id);

export const validateEmail = (email) =>
  email && typeof email === "string" && emailRegex.test(email);

export const validateName = (name) =>
  name && typeof name === "string" && nameRegex.test(name);

export const validatePassword = (password) =>
  password &&
  typeof password === "string" &&
  password.length >= 8 &&
  password.length <= 20;
