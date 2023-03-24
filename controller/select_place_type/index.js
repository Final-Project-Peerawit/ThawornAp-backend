const con = require("../../connection");

const handlerSelectPlaceType = (req, res) => {
  try {
    con.query(
      `SELECT * FROM SELECT_PLACE_TYPE WHERE active = 1;`,
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

module.exports = handlerSelectPlaceType;
