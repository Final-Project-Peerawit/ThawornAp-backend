const express = require("express"); 
const cors = require("cors"); 

const handleGetSelectBranch = require("./src/controller/select_branch");
const handleGetThawornRole = require("./src/controller/thaworn_role");
const handleGetSelectPlaceType = require("./src/controller/select_place_type");
const handleGetSelectPlace = require("./src/controller/select_place");
const handleGetMenuByRoleId = require("./src/controller/menu_list");
const sqlQuery = require("./sql_query")

const app = express();
const port = 5174;

sqlQuery()

app.use(express.json());

app.use(cors({ origin: "*",credentials: true}));

app.get("/api/branch", handleGetSelectBranch);

app.get("/api/place_type", handleGetSelectPlaceType);

app.get("/api/thaworn_role", handleGetThawornRole);

app.get("/api/place/:type_id", handleGetSelectPlace);

app.get("/api/menu/:role_id", handleGetMenuByRoleId);

app.listen(port, () => {
  console.log("listening in port ", port);
});
