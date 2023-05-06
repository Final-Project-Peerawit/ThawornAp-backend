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
const handlerGetUsesProfile = require("./src/controller/user_profile/get");
const handlerGetExpensesAllBranch = require("./src/controller/expeses_all_branch");
const handlerReport = require("./src/controller/report");
const handleUpdateProfile = require("./src/controller/user_profile/put");
const handleGetListReport = require("./src/controller/list_report/get");
const handlerGetReportState = require("./src/controller/report_state");
const handlerUpdateListReport = require("./src/controller/list_report/put");
const handlerTimeSlot = require("./src/controller/time_slot/post");
const handlerUpdateTimeSlot = require("./src/controller/time_slot/put");
const handlerChangeState = require("./src/controller/change_state");
const handleGetListAdminData = require("./src/controller/table_admin");
const handleGetTimeSlot = require("./src/controller/time_slot/get");
const handleUpdateRepairDateListReport = require("./src/controller/update_repair_date_list_report");

sqlQuery();

app.use(express.json());

app.use(cors({ origin: "*", credentials: true }));

app.get("/api/list-report", handlerAuthen, handleGetListReport);
app.get("/api/reportState", handlerAuthen, handlerGetReportState);
app.get("/api/branch", handleGetSelectBranch);
app.get("/api/place_type", handlerAuthen, handleGetSelectPlaceType);
app.get("/api/thaworn_role", handlerAuthen, handleGetThawornRole);
app.get("/api/place/:type_id", handlerAuthen, handleGetSelectPlace);
app.get("/api/menu", handlerAuthen, handleGetMenuByRoleId);
app.get("/api/expensesBranch", handlerAuthen, handlerGetExpensesBranch);
app.get("/api/user/profile", handlerAuthen, handlerGetUsesProfile);
app.get("/api/expensesAllBranch", handlerAuthen, handlerGetExpensesAllBranch);
app.get("/api/data_admin", handlerAuthen, handleGetListAdminData);
app.get("/api/time_slot", handlerAuthen, handleGetTimeSlot);

app.post("/api/login", handleLogin);
app.post("/api/report", handlerAuthen, handlerReport);
app.post("/api/register", handleRegister);
app.post("/api/registerAdmin", handlerAuthen, handleRegisterAdmin);
app.post(
  "/api/list-report/:report_id/time-slot",
  handlerAuthen,
  handlerTimeSlot
);

app.put("/api/user/profile", handlerAuthen, handleUpdateProfile);
app.put("/api/list-report", handlerAuthen, handlerUpdateListReport);
app.put(
  "/api/list-report/:time_id/time-slot",
  handlerAuthen,
  handlerUpdateTimeSlot
);
app.put(
  "/api/list-report/:report_id/change-state",
  handlerAuthen,
  handlerChangeState
);
app.put(
  "/api/list-report/:report_id/change-time",
  handlerAuthen,
  handleUpdateRepairDateListReport
);

app.listen(port, () => {
  console.log("listening in port ", port);
});
