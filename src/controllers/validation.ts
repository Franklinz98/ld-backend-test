import createError from "http-errors";
import { UserData, StateType, AreaData } from "../models/types";

export function validateUserData(req: any, res: any, next: any) {
  const data: UserData = req.body;
  if (
    !data.name ||
    !data.lastname ||
    !data.birthdate ||
    !data.email ||
    !data.id ||
    !data.salary ||
    !data.state
  ) {
    next(new createError.BadRequest("Missing fields"));
    return;
  }
  if (data.name.length > 50) {
    next(new createError.BadRequest("Name field exceeds 50 characters"));
    return;
  }
  if (data.lastname.length > 50) {
    next(new createError.BadRequest("Lastname field exceeds 50 characters"));
    return;
  }
  if (typeof data.birthdate === typeof Date) {
    next(new createError.BadRequest("Date field is not a date"));
    return;
  }
  if (data.email.length > 50) {
    next(new createError.BadRequest("Email field exceeds 50 characters"));
    return;
  }
  if (data.id.toString().length > 7) {
    next(
      new createError.BadRequest(
        "The identification field is not a valid identification number."
      )
    );
    return;
  }
  if (data.email.toString().length > 50) {
    next(new createError.BadRequest("Email field exceeds 50 characters"));
    return;
  }
  if (data.state !== "active" && data.state !== "inactive") {
    next(
      new createError.BadRequest("The state field must be active or inactive")
    );
    return;
  }
  next();
}

export function validateAreaData(req: any, res: any, next: any) {
  const data: AreaData = req.body;
  if (!data.code || !data.name || !data.leader || !data.state) {
    next(new createError.BadRequest("Missing fields"));
    return;
  }
  if (data.name.length > 50) {
    next(new createError.BadRequest("Name field exceeds 50 characters"));
    return;
  }
  if (data.leader.toString().length > 7) {
    next(
      new createError.BadRequest(
        "The identification field is not a valid identification number."
      )
    );
    return;
  }
  if (data.code.toString().length > 2) {
    next(new createError.BadRequest("Email field exceeds 50 characters"));
    return;
  }
  if (data.state !== "active" && data.state !== "inactive") {
    next(
      new createError.BadRequest("The state field must be active or inactive")
    );
    return;
  }
  next();
}

export function validateUserId(req: any, res: any, next: any) {
  if (!req.params.id) {
    next(new createError.BadRequest("Missing fields"));
    return;
  }

  if (req.params.id.toString().length > 7) {
    next(
      new createError.BadRequest(
        "The identification field is not a valid identification number."
      )
    );
    return;
  }
  next();
}

export function validateAreaCode(req: any, res: any, next: any) {
  if (!req.params.code) {
    next(new createError.BadRequest("Missing fields"));
    return;
  }
  if (req.params.code.toString().length > 2) {
    next(new createError.BadRequest("Code field is not a valid area code."));
    return;
  }
  next();
}
