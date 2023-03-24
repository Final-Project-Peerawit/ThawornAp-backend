const express = require("express"); // ไลบรารี่สำหรับทำ api
const cors = require("cors"); // ไลบรารี่สำหรับกำหนดการเชื่อมต่อ api
const handlerRegister = require("./controller/register");
const handlerLogin = require("./controller/login");
const handlerListUser = require("./controller/list-user");
const handlerSelectBranch = require("./controller/select_branch");
const handlerSelectPlaceType = require("./controller/select_place_type");
const fs = require("fs");

const path = require("path");

const con = require("./connection"); // เรียก con จากไฟล์ connection.js
const app = express(); // เรียกใช้งานฟังก์ชั้นสำหรับการสร้าง api
const port = 5174; // ประกาศ port

// อนุญาตให้เชื่อมต่อ api ได้ทั้งหมดไม่ว่าจะมาจาแอปไหน
const corsOption = {
  origin: "*",
  credentials: true,
};

//เชื่อมต่อฐานข้อมูล
con.connect(function (err) {
  if (err) throw err;
});

const SELECT_PLACE_TYPE = fs
  .readFileSync("./tables/SELECT_PLACE_TYPE.sql")
  .toString();

const SELECT_PLACE = fs.readFileSync("./tables/SELECT_PLACE.sql").toString();

const SELECT_ITEM_REPAIR = fs
  .readFileSync("./tables/SELECT_ITEM_REPAIR.sql")
  .toString();

const SELECT_BRANCH = fs.readFileSync("./tables/SELECT_BRANCH.sql").toString();

const THAWORN_ROLE = fs.readFileSync("./tables/THAWORN_ROLE.sql").toString();

const FUNCTION_LIST = fs.readFileSync("./tables/FUNCTION_LIST.sql").toString();

const ROLE_LIST = fs.readFileSync("./tables/ROLE_LIST.sql").toString();

const USER_INFO = fs.readFileSync("./tables/USER_INFO.sql").toString();

const REPORT_STATE = fs.readFileSync("./tables/REPORT_STATE.sql").toString();

const REPORT = fs.readFileSync("./tables/REPORT.sql").toString();

const EXPENSES = fs.readFileSync("./tables/EXPENSES.sql").toString();

const INSERT_BRANCH = fs
  .readFileSync("./tables/INSERT_SELECT_BRANCH.sql")
  .toString();

const INSERT_PLACE_TYPE = fs
  .readFileSync("./tables/INSERT_SELECT_PLACE_TYPE.sql")
  .toString();

const INSERT_PLACE = fs
  .readFileSync("./tables/INSERT_SELECT_PLACE.sql")
  .toString();

const INSERT_ITEM_REPAIR = fs
  .readFileSync("./tables/INSERT_SELECT_ITEM_REPAIR.sql")
  .toString();

const INSERT_THAWORN_ROLE = fs
  .readFileSync("./tables/INSERT_THAWORN_ROLE.sql")
  .toString();

const INSERT_FUNCTION_LIST = fs
  .readFileSync("./tables/INSERT_FUNCTION_LIST.sql")
  .toString();

const INSERT_ROLE_LIST = fs
  .readFileSync("./tables/INSERT_ROLE_LIST.sql")
  .toString();

con.query(SELECT_PLACE_TYPE, (err) => {
  if (err) throw err;
  console.log("create table success1");
});

con.query(SELECT_PLACE, (err) => {
  if (err) throw err;
  console.log("create table success2");
});

con.query(SELECT_ITEM_REPAIR, (err) => {
  if (err) throw err;
  console.log("create table success3");
});

con.query(SELECT_BRANCH, (err) => {
  if (err) throw err;
  console.log("create table success4");
});

con.query(THAWORN_ROLE, (err) => {
  if (err) throw err;
  console.log("create table success5");
});

con.query(FUNCTION_LIST, (err) => {
  if (err) throw err;
  console.log("create table success6");
});

con.query(ROLE_LIST, (err) => {
  if (err) throw err;
  console.log("create table success7");
});

con.query(USER_INFO, (err) => {
  if (err) throw err;
  console.log("create table success8");
});

con.query(REPORT_STATE, (err) => {
  if (err) throw err;
  console.log("create table success9");
});

con.query(REPORT, (err) => {
  if (err) throw err;
  console.log("create table success10");
});

con.query(EXPENSES, (err) => {
  if (err) throw err;
  console.log("create table success11");
});

con.query(INSERT_BRANCH, (err) => {
  if (err) throw err;
  console.log("insert select_branch");
});

con.query(INSERT_PLACE_TYPE, (err) => {
  if (err) throw err;
  console.log("insert select_place_type");
});

con.query(INSERT_PLACE, (err) => {
  if (err) throw err;
  console.log("insert select_place");
});

con.query(INSERT_ITEM_REPAIR, (err) => {
  if (err) throw err;
  console.log("insert select_item_repair");
});

con.query(INSERT_THAWORN_ROLE, (err) => {
  if (err) throw err;
  console.log("insert thaworn_role");
});

con.query(INSERT_FUNCTION_LIST, (err) => {
  if (err) throw err;
  console.log("insert function_list");
});

con.query(INSERT_ROLE_LIST, (err) => {
  if (err) throw err;
  console.log("insert role_list");
});

//ให้สามารถอ่านข้อมูลประเภท json ได้
app.use(express.json());

//อนุญาตทุกแอป
app.use(cors(corsOption));

app.get("/api/list-user", handlerListUser); // get ใช้สำหรับดึงข้อมูลรายชื่อผู้ใช้งานระบบ

app.get("/api/branch", handlerSelectBranch);

app.get("/api/place_type", handlerSelectPlaceType);

app.post("/api/register", handlerRegister); // POST ใช้สำหรับสร้างข้อมูลผู้ใช้งานระบบ

app.post("/api/login", handlerLogin); // POST ใช้สำหรับตรวจสอบผู้ใช้งานระบบ

// รันด้วย port 5174
app.listen(port, () => {
  console.log("listening in port ", port);
});
