import { ConflictException } from "../../application/erros/conflict.exception.js";
import { UnauthorizedException } from "../../application/erros/unauthorized.exception.js";
import { BadRequestException } from "../errors/bad-request.exception.js";

export const errorMiddleware = (error, req, res, next) => {
  if (error instanceof BadRequestException)
    return res.status(400).send(error.message);
  if (error instanceof ConflictException)
    return res.status(409).send(error.message);
  if (error instanceof UnauthorizedException)
    return res.status(401).send(error.message);

  return res.status(500).send("Error interno del servidor");
};
