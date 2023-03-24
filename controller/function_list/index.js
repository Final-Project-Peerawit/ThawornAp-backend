const con = require("../../connection");

const handlerFunctionList = (req, res) => {
  try {
    con.query(`SELECT * FROM FUNCTION_LIST`, (err, result, _fields) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).json({ result: result });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerFunctionList;
