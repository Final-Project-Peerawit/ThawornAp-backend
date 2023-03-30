const mysql = require("mysql2");
require("dotenv/config");

// สร้างการเชื่อมต่อฐานข้อมูล
const conection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERS,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = conection;
