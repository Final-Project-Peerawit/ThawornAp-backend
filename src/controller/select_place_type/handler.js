const connection = require("../../connection");

const handlerGetSelectPlaceType = (req, res) => {
  try {
    connection.query(
      `SELECT * FROM SELECT_PLACE_TYPE WHERE active = 1;`,
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

module.exports = handlerGetSelectPlaceType;