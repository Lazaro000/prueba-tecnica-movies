import EntitySchema from "@mikro-orm/core";

export class User {
  /**
   * @param {string} name
   * @param {string} email
   */
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

export const userSchema = new EntitySchema({
  class: User,
  properties: {
    name: { type: "string" },
    email: { type: "string", primary: true },
  },
});
