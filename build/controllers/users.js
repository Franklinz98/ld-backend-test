"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.updateUser = exports.getAllUsers = exports.getUser = exports.createUser = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const user_1 = __importDefault(require("../models/user"));
const database_1 = require("./database");
function createUser(req, res, next) {
    const user = user_1.default.fromJson(req.body);
    database_1.addUser(user)
        .then(() => {
        res.send(`Created ${user.id}`);
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.createUser = createUser;
function getUser(req, res, next) {
    const id = req.params.id;
    database_1.fetchUser(id)
        .then((user) => {
        res.send({
            user: user.toJson(),
        });
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.getUser = getUser;
function getAllUsers(req, res, next) {
    database_1.fetchAllUsers()
        .then((users) => {
        res.send({
            users: users,
        });
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.getAllUsers = getAllUsers;
function updateUser(req, res, next) {
    const user = user_1.default.fromJson(req.body);
    database_1.uptUser(user)
        .then(() => {
        res.send(`Updated ${user.id}`);
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.updateUser = updateUser;
function removeUser(req, res, next) {
    const id = req.params.id;
    database_1.rmvUser(id)
        .then(() => {
        res.send(`Removed ${id}`);
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.removeUser = removeUser;
