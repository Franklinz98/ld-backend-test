"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApikey = exports.checkApiKey = exports.generateApikey = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const bcrypt_1 = require("./bcrypt");
const database_1 = require("./database");
// Controllers to export
function generateApikey(req, res, next) {
    const id = req.params.id;
    bcrypt_1.genHash(id, (key) => {
        database_1.storeKey(id, key)
            .then(() => {
            res.send({
                uid: id,
                key: key,
            });
        })
            .catch((error) => {
            next(new http_errors_1.default.InternalServerError(error));
        });
    });
}
exports.generateApikey = generateApikey;
function checkApiKey(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.headers.key) {
            let key = req.headers.key;
            const ids = yield database_1.getIds();
            let id = bcrypt_1.testHash(key, ids);
            if (id) {
                req.currentId = id;
                next();
            }
            else {
                next(new http_errors_1.default.Unauthorized("Bad API key"));
            }
        }
        else {
            next(new http_errors_1.default.Unauthorized("API Key missing"));
        }
    });
}
exports.checkApiKey = checkApiKey;
function getApikey(req, res, next) {
    const id = req.params.id;
    database_1.fetchKey(id)
        .then((key) => {
        res.send({
            key: key,
        });
    })
        .catch((error) => {
        next(new http_errors_1.default.InternalServerError(error));
    });
}
exports.getApikey = getApikey;
