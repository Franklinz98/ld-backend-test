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
exports.rmvArea = exports.uptArea = exports.fetchAllAreas = exports.fetchArea = exports.addArea = exports.rmvUser = exports.uptUser = exports.fetchAllUsers = exports.fetchUser = exports.addUser = exports.getIds = exports.fetchKey = exports.storeKey = void 0;
const database_1 = __importDefault(require("../database"));
const area_1 = __importDefault(require("../models/area"));
const user_1 = __importDefault(require("../models/user"));
/* API Key */
function storeKey(id, key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("UPDATE users set ? WHERE id = ?", [{ apikey: key }, id]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.storeKey = storeKey;
function fetchKey(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryResult = yield database_1.default.query("SELECT id, apikey FROM users WHERE id = ?", id);
            return queryResult[0].apikey;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchKey = fetchKey;
/* Users */
function getIds() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const ids = yield database_1.default.query("SELECT id FROM users");
            return ids;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getIds = getIds;
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("INSERT INTO users set ?", [user.toJson()]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.addUser = addUser;
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            var queryResult = yield database_1.default.query("SELECT * FROM users WHERE id = ?", [
                id,
            ]);
            return user_1.default.fromJson(queryResult[0]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchUser = fetchUser;
function fetchAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const users = yield database_1.default.query("SELECT * FROM users");
            return users;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchAllUsers = fetchAllUsers;
function uptUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("UPDATE users set ? WHERE code = ?", [data, data.id]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.uptUser = uptUser;
function rmvUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("DELETE FROM users WHERE id = ?", [id]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.rmvUser = rmvUser;
/* Areas */
function addArea(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("INSERT INTO areas set ?", [data.toJson()]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.addArea = addArea;
function fetchArea(code) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            var queryResult = yield database_1.default.query("SELECT * FROM areas WHERE code = ?", code);
            return area_1.default.fromJson(queryResult[0]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchArea = fetchArea;
function fetchAllAreas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const areas = yield database_1.default.query("SELECT * FROM areas");
            return areas;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchAllAreas = fetchAllAreas;
function uptArea(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("UPDATE areas set ? WHERE code = ?", [data, data.code]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.uptArea = uptArea;
function rmvArea(code) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.query("DELETE FROM areas WHERE code = ?", [code]);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.rmvArea = rmvArea;
