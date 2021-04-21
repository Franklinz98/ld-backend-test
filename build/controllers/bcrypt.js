"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testHash = exports.genHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const constants = {
    SALT_ROUNDS: 12,
    PREFIX: "$2b$12$",
    SECRET: "-ludycom_DB",
};
// Hash management
function genHash(data, callback) {
    let key = data + constants.SECRET;
    bcrypt_1.default.genSalt(constants.SALT_ROUNDS, function (err, salt) {
        bcrypt_1.default.hash(key, salt, function (err, hash) {
            callback(hash.replace(constants.PREFIX, ""));
        });
    });
}
exports.genHash = genHash;
function testHash(hash, data) {
    for (const element of data) {
        if (bcrypt_1.default.compareSync(element.id + constants.SECRET, constants.PREFIX + hash)) {
            return element;
        }
    }
    return false;
}
exports.testHash = testHash;
