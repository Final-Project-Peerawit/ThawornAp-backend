const con = require("../../connection");

const handlerSelectPlace = (req, res) => {
  try {
    con.query(
      `SELECT * FROM SELECT_PLACE WHERE active = 1 AND type_id = ${req.params.id};`,
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

module.exports = handlerSelectPlace;
