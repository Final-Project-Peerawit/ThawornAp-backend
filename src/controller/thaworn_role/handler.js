const connection = require("../../connection");

const handlerGetThawornRole = (_req, res) => {
  try {
    connection.query(
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

module.exports = handlerGetThawornRole;
