const connection = require("../../../connection");

const handlerDeleteTimeSlot = (req, res) => {
  const { report_id } = req.params;

  try {
    connection.query(
      `DELETE FROM TIME_SLOT WHERE report_id = ${connection.escape(
        report_id
      )};`,
      (err, result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }
        connection.query(
          `UPDATE REPORT SET is_time_not_match = 0 WHERE report_id = ${connection.escape(
            report_id
          )};`,
          (err, result, _fields) => {
            if (err) {
              return res.status(400).send(err);
            }
            return res.status(200).json({ result: result });
          }
        );
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerDeleteTimeSlot;
