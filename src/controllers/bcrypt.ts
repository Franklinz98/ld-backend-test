import bcrypt from "bcrypt";
import { UserData } from "../models/types";

const constants = {
  SALT_ROUNDS: 12,
  PREFIX: "$2b$12$",
  SECRET: "-ludycom_DB",
};

// Hash management

export function genHash(data: number | string, callback: Function): void {
  let key = data + constants.SECRET;
  bcrypt.genSalt(constants.SALT_ROUNDS, function (err, salt) {
    bcrypt.hash(key, salt, function (err, hash) {
      callback(hash.replace(constants.PREFIX, ""));
    });
  });
}

export function testHash(hash: string, data: Array<UserData>) {
  for (const element of data) {
    if (
      bcrypt.compareSync(element.id + constants.SECRET, constants.PREFIX + hash)
    ) {
      return element;
    }
  }
  return false;
}
