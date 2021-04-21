import createError from "http-errors";
import Area from "../models/area";
import { AreaData } from "../models/types";
import {
  addArea,
  fetchAllAreas,
  fetchArea,
  rmvArea,
  uptArea,
} from "./database";

export function createArea(req: any, res: any, next: any) {
  const area: Area = Area.fromJson(req.body);
  addArea(area)
    .then(() => {
      res.send(`Registered ${area.code}`);
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function getArea(req: any, res: any, next: any) {
  const code: number = req.params.code;
  fetchArea(code)
    .then((area: Area) => {
      res.send({
        area: area.toJson(),
      });
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function getAllAreas(req: any, res: any, next: any) {
  fetchAllAreas()
    .then((areas: Array<AreaData>) => {
      res.send({
        areas: areas,
      });
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function updateArea(req: any, res: any, next: any) {
  const area: Area = Area.fromJson(req.body);
  uptArea(area)
    .then(() => {
      res.send(`Updated ${area.code}`);
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}

export function removeArea(req: any, res: any, next: any) {
  const code: number = req.params.code;
  rmvArea(code)
    .then(() => {
      res.send(`Removed ${code}`);
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}
