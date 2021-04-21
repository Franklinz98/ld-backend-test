"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const util_1 = require("util");
const config_1 = require("./config");
const pool = mysql2_1.default.createPool(config_1.databaseConfig);
pool.getConnection((err, connection) => {
    if (err) {
        console.error(err);
        switch (err.code) {
            case "PROTOCOL_CONNECTION_LOST":
                console.error("Database connection was closed");
                break;
            case "ER_CON_COUNT_ERROR":
                console.error("Database has too many connections");
                break;
            case "ECONNREFUSED":
                console.error("Database connection was refused");
                break;
            default:
                console.error("Error connecting to the database ");
                break;
        }
    }
    if (connection) {
        connection.release();
        console.log("Database is connected.");
    }
    return;
});
// @ts-ignore
pool.query = util_1.promisify(pool.query).bind(pool);
exports.default = pool;
