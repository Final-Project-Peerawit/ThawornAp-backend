const connection = require("../../../connection");

const handlerGetTimeSlot = (req, res) => {
  const { time_id } = req.query;
  try {
    connection.query(
      `SELECT * FROM TIME_SLOT WHERE time_id = ${connection.escape(time_id)};`,
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

module.exports = handlerGetTimeSlot;
