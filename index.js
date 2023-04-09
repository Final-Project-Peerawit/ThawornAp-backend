const express = require("express");
const cors = require("cors");
const sqlQuery = require("./sql_query");

const app = express();
const port = 5174;

const handleGetSelectBranch = require("./src/controller/select_branch");
const handleGetThawornRole = require("./src/controller/thaworn_role");
const handleGetSelectPlaceType = require("./src/controller/select_place_type");
const handleGetSelectPlace = require("./src/controller/select_place");
const handleGetMenuByRoleId = require("./src/controller/menu_list");
const handleRegister = require("./src/controller/register");
const handleRegisterAdmin = require("./src/controller/register_admin");
const handleLogin = require("./src/controller/login");
const handlerAuthen = require("./src/controller/authen");
const handlerGetExpensesBranch = require("./src/controller/expeses_branch");
const handlerGetExpensesAllBranch = require("./src/controller/expeses_all_branch");

sqlQuery();

app.use(express.json());

app.use(cors({ origin: "*", credentials: true }));

app.post("/api/register", handleRegister);

app.post("/api/registerAdmin", handleRegisterAdmin);

app.get("/api/branch", handlerAuthen, handleGetSelectBranch);

app.get("/api/place_type", handlerAuthen, handleGetSelectPlaceType);

app.get("/api/thaworn_role", handlerAuthen, handleGetThawornRole);

app.post("/api/login", handleLogin);

app.get("/api/place/:type_id", handlerAuthen, handleGetSelectPlace);

app.get("/api/menu", handlerAuthen, handleGetMenuByRoleId);

app.get("/api/expensesBranch", handlerAuthen, handlerGetExpensesBranch);

app.get("/api/expensesAllBranch", handlerAuthen, handlerGetExpensesAllBranch);

app.listen(port, () => {
  console.log("listening in port ", port);
});
