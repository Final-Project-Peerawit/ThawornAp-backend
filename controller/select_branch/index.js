const con = require("../../connection");

const handlerSelectBranch = (req, res) => {
  console.log(req.params.type_id);
  try {
    con.query(
      `SELECT * FROM SELECT_BRANCH WHERE active = 1;`,
      (err, result, _fields) => {
        if (err) {
          return res.status(400).send();
        }

        return res.status(200).json({ result: result });
      }
    );
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = handlerSelectBranch;
