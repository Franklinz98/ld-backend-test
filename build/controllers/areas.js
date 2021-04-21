"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArea = exports.updateArea = exports.getAllAreas = exports.getArea = exports.createArea = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const area_1 = __importDefault(require("../models/area"));
const database_1 = require("./database");
function createArea(req, res, next) {
    const area = area_1.default.fromJson(req.body);
    database_1.addArea(area)
        .then(() => {
        res.send(`Registered ${area.code}`);
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.createArea = createArea;
function getArea(req, res, next) {
    const code = req.params.code;
    database_1.fetchArea(code)
        .then((area) => {
        res.send({
            area: area.toJson(),
        });
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.getArea = getArea;
function getAllAreas(req, res, next) {
    database_1.fetchAllAreas()
        .then((areas) => {
        res.send({
            areas: areas,
        });
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.getAllAreas = getAllAreas;
function updateArea(req, res, next) {
    const area = area_1.default.fromJson(req.body);
    database_1.uptArea(area)
        .then(() => {
        res.send(`Updated ${area.code}`);
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.updateArea = updateArea;
function removeArea(req, res, next) {
    const code = req.params.code;
    database_1.rmvArea(code)
        .then(() => {
        res.send(`Removed ${code}`);
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.removeArea = removeArea;
