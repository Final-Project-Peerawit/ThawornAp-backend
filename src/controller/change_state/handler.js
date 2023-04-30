const connection = require("../../connection");

const handlerChangeState = (req, res) => {
  const { state_id, is_time_not_match, description_notify } = req.body;
  const { report_id } = req.params;
  const queryState = state_id
    ? `state_id = ${connection.escape(state_id)}`
    : "";

  const queryIsTimeNotMatch =
    is_time_not_match && description_notify
      ? `is_time_not_match = ${connection.escape(
          is_time_not_match
        )}, description_notify = ${connection.escape(description_notify)}`
      : "";

  try {
    connection.query(
      `UPDATE REPORT SET ${queryState} ${queryIsTimeNotMatch}
        WHERE report_id = ${connection.escape(report_id)};`,
      (err, _result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(201).json({ message: "ok" });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerChangeState;
