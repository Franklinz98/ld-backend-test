import mysql from "mysql2";
import { promisify } from "util";
import { databaseConfig } from "./config";

const pool = mysql.createPool(databaseConfig);

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
pool.query = promisify(pool.query).bind(pool);

export default pool;
