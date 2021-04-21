"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAreaCode = exports.validateUserId = exports.validateAreaData = exports.validateUserData = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
function validateUserData(req, res, next) {
    const data = req.body;
    if (!data.name ||
        !data.lastname ||
        !data.birthdate ||
        !data.email ||
        !data.id ||
        !data.salary ||
        !data.state) {
        next(new http_errors_1.default.BadRequest("Missing fields"));
        return;
    }
    if (data.name.length > 50) {
        next(new http_errors_1.default.BadRequest("Name field exceeds 50 characters"));
        return;
    }
    if (data.lastname.length > 50) {
        next(new http_errors_1.default.BadRequest("Lastname field exceeds 50 characters"));
        return;
    }
    if (typeof data.birthdate === typeof Date) {
        next(new http_errors_1.default.BadRequest("Date field is not a date"));
        return;
    }
    if (data.email.length > 50) {
        next(new http_errors_1.default.BadRequest("Email field exceeds 50 characters"));
        return;
    }
    if (data.id.toString().length > 7) {
        next(new http_errors_1.default.BadRequest("The identification field is not a valid identification number."));
        return;
    }
    if (data.email.toString().length > 50) {
        next(new http_errors_1.default.BadRequest("Email field exceeds 50 characters"));
        return;
    }
    if (data.state !== "active" && data.state !== "inactive") {
        next(new http_errors_1.default.BadRequest("The state field must be active or inactive"));
        return;
    }
    next();
}
exports.validateUserData = validateUserData;
function validateAreaData(req, res, next) {
    const data = req.body;
    if (!data.code || !data.name || !data.leader || !data.state) {
        next(new http_errors_1.default.BadRequest("Missing fields"));
        return;
    }
    if (data.name.length > 50) {
        next(new http_errors_1.default.BadRequest("Name field exceeds 50 characters"));
        return;
    }
    if (data.leader.toString().length > 7) {
        next(new http_errors_1.default.BadRequest("The identification field is not a valid identification number."));
        return;
    }
    if (data.code.toString().length > 2) {
        next(new http_errors_1.default.BadRequest("Email field exceeds 50 characters"));
        return;
    }
    if (data.state !== "active" && data.state !== "inactive") {
        next(new http_errors_1.default.BadRequest("The state field must be active or inactive"));
        return;
    }
    next();
}
exports.validateAreaData = validateAreaData;
function validateUserId(req, res, next) {
    if (!req.params.id) {
        next(new http_errors_1.default.BadRequest("Missing fields"));
        return;
    }
    if (req.params.id.toString().length > 7) {
        next(new http_errors_1.default.BadRequest("The identification field is not a valid identification number."));
        return;
    }
    next();
}
exports.validateUserId = validateUserId;
function validateAreaCode(req, res, next) {
    if (!req.params.code) {
        next(new http_errors_1.default.BadRequest("Missing fields"));
        return;
    }
    if (req.params.code.toString().length > 2) {
        next(new http_errors_1.default.BadRequest("Code field is not a valid area code."));
        return;
    }
    next();
}
exports.validateAreaCode = validateAreaCode;
