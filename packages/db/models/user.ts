import Schwifty from "@hapipal/schwifty";
import { v4 } from "uuid";
import Joi from "joi";
export default class User extends Schwifty.Model {
  static get tableName() {
    return "User";
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.string()
        .guid({
          version: "uuidv4",
        })
        .default(() => v4()),
      username: Joi.string(),
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(
          RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}/)
        )
        .required(),
      email_confirmation_code: Joi.string()
        .guid({
          version: "uuidv4",
        })
        .default(() => v4()),
      email_confirmed: Joi.boolean().default(false), //default to true for dev convenience
      password_reset_code: Joi.string()
        .guid({
          version: "uuidv4",
        })
        .default(() => v4()),
      phone: Joi.string(),
      role: Joi.string().default("user"),
      date_of_birth: Joi.string(),
      email_updates: Joi.boolean(),
      date_joined: Joi.number(),
    });
  }
}
