const con = require("../../connection");

const handlerThawornRole = (req, res) => {
  try {
    con.query(
      `SELECT * FROM THAWORN_ROLE WHERE active = 1;`,
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

module.exports = handlerThawornRole;
