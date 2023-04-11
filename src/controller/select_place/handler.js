const connection = require("../../connection");

const handlerGetSelectPlace = (req, res) => {
  const { type_id } = req.params;
  try {
    connection.query(
      `SELECT * FROM SELECT_PLACE WHERE active = 1 AND type_id = ${connection.escape(
        type_id
      )};`,
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

module.exports = handlerGetSelectPlace;
