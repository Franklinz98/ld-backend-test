import createError from "http-errors";
import { UserData } from "../models/types";
import User from "../models/user";
import {
  addUser,
  fetchAllUsers,
  fetchUser,
  rmvUser,
  uptUser,
} from "./database";

export function createUser(req: any, res: any, next: any) {
  const user: User = User.fromJson(req.body);
  addUser(user)
    .then(() => {
      res.send(`Created ${user.id}`);
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function getUser(req: any, res: any, next: any) {
  const id: number = req.params.id;
  fetchUser(id)
    .then((user: User) => {
      res.send({
        user: user.toJson(),
      });
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function getAllUsers(req: any, res: any, next: any) {
  fetchAllUsers()
    .then((users: Array<UserData>) => {
      res.send({
        users: users,
      });
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function updateUser(req: any, res: any, next: any) {
  const user: User = User.fromJson(req.body);
  uptUser(user)
    .then(() => {
      res.send(`Updated ${user.id}`);
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function removeUser(req: any, res: any, next: any) {
  const id: number = req.params.id;
  rmvUser(id)
    .then(() => {
      res.send(`Removed ${id}`);
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}
