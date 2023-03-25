const con = require("../../connection");

const handlerRoleList = (req, res) => {
  console.log(req.params.role_id);
  console.log(req.params.function_id);
  try {
    con.query(
      `SELECT * FROM ROLE_LIST WHERE role_id = ${req.params.role_id} AND function_id = ${req.params.function_id};`,
      (err, result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }

        return res.status(200).json({ result: result });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerRoleList;
