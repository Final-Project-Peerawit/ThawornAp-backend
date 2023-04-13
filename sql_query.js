const fs = require("fs");
const connection = require("./src/connection");

const sqlQuery = () => {
  const SELECT_PLACE_TYPE = fs
    .readFileSync("./src/sql_tables/SELECT_PLACE_TYPE.sql")
    .toString();

  const SELECT_PLACE = fs
    .readFileSync("./src/sql_tables/SELECT_PLACE.sql")
    .toString();

  const SELECT_ITEM_REPAIR = fs
    .readFileSync("./src/sql_tables/SELECT_ITEM_REPAIR.sql")
    .toString();

  const SELECT_BRANCH = fs
    .readFileSync("./src/sql_tables/SELECT_BRANCH.sql")
    .toString();

  const THAWORN_ROLE = fs
    .readFileSync("./src/sql_tables/THAWORN_ROLE.sql")
    .toString();

  const FUNCTION_LIST = fs
    .readFileSync("./src/sql_tables/FUNCTION_LIST.sql")
    .toString();

  const ROLE_LIST = fs
    .readFileSync("./src/sql_tables/ROLE_LIST.sql")
    .toString();

  const USER_INFO = fs
    .readFileSync("./src/sql_tables/USER_INFO.sql")
    .toString();

  const REPORT_STATE = fs
    .readFileSync("./src/sql_tables/REPORT_STATE.sql")
    .toString();

  const REPORT = fs.readFileSync("./src/sql_tables/REPORT.sql").toString();

  const EXPENSES = fs.readFileSync("./src/sql_tables/EXPENSES.sql").toString();

  const INSERT_BRANCH = fs
    .readFileSync("./src/sql_tables/INSERT_SELECT_BRANCH.sql")
    .toString();

  const INSERT_PLACE_TYPE = fs
    .readFileSync("./src/sql_tables/INSERT_SELECT_PLACE_TYPE.sql")
    .toString();

  const INSERT_PLACE = fs
    .readFileSync("./src/sql_tables/INSERT_SELECT_PLACE.sql")
    .toString();

  const INSERT_ITEM_REPAIR = fs
    .readFileSync("./src/sql_tables/INSERT_SELECT_ITEM_REPAIR.sql")
    .toString();

  const INSERT_THAWORN_ROLE = fs
    .readFileSync("./src/sql_tables/INSERT_THAWORN_ROLE.sql")
    .toString();

  const INSERT_FUNCTION_LIST = fs
    .readFileSync("./src/sql_tables/INSERT_FUNCTION_LIST.sql")
    .toString();

  const INSERT_ROLE_LIST = fs
    .readFileSync("./src/sql_tables/INSERT_ROLE_LIST.sql")
    .toString();

  const INSERT_REPORT_STATE = fs
    .readFileSync("./src/sql_tables/INSERT_REPORT_STATE.sql")
    .toString();

  connection.query(SELECT_PLACE_TYPE, (err) => {
    if (err) throw err;
    console.log("create table success1");
  });

  connection.query(SELECT_PLACE, (err) => {
    if (err) throw err;
    console.log("create table success2");
  });

  connection.query(SELECT_ITEM_REPAIR, (err) => {
    if (err) throw err;
    console.log("create table success3");
  });

  connection.query(SELECT_BRANCH, (err) => {
    if (err) throw err;
    console.log("create table success4");
  });

  connection.query(THAWORN_ROLE, (err) => {
    if (err) throw err;
    console.log("create table success5");
  });

  connection.query(FUNCTION_LIST, (err) => {
    if (err) throw err;
    console.log("create table success6");
  });

  connection.query(ROLE_LIST, (err) => {
    if (err) throw err;
    console.log("create table success7");
  });

  connection.query(USER_INFO, (err) => {
    if (err) throw err;
    console.log("create table success8");
  });

  connection.query(REPORT_STATE, (err) => {
    if (err) throw err;
    console.log("create table success9");
  });

  connection.query(REPORT, (err) => {
    if (err) throw err;
    console.log("create table success10");
  });

  connection.query(EXPENSES, (err) => {
    if (err) throw err;
    console.log("create table success11");
  });

  connection.query(INSERT_BRANCH, (err) => {
    if (err) throw err;
    console.log("insert select_branch");
  });

  connection.query(INSERT_PLACE_TYPE, (err) => {
    if (err) throw err;
    console.log("insert select_place_type");
  });

  connection.query(INSERT_PLACE, (err) => {
    if (err) throw err;
    console.log("insert select_place");
  });

  connection.query(INSERT_ITEM_REPAIR, (err) => {
    if (err) throw err;
    console.log("insert select_item_repair");
  });

  connection.query(INSERT_THAWORN_ROLE, (err) => {
    if (err) throw err;
    console.log("insert thaworn_role");
  });

  connection.query(INSERT_FUNCTION_LIST, (err) => {
    if (err) throw err;
    console.log("insert function_list");
  });

  connection.query(INSERT_ROLE_LIST, (err) => {
    if (err) throw err;
    console.log("insert role_list");
  });

  connection.query(INSERT_REPORT_STATE, (err) => {
    if (err) throw err;
    console.log("insert report_state");
  });
};

module.exports = sqlQuery;
