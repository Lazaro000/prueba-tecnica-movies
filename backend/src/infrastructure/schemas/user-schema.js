import { EntitySchema } from "@mikro-orm/core";
import { User } from "../../domain/entities/user";

export const userSchema = new EntitySchema({
  class: User,
  properties: {
    id: { type: "string", primary: true, nullable: false },
    name: { type: "string", nullable: false },
    email: { type: "string", unique: true, nullable: false },
    password: { type: "string", nullable: false },
  },
});
