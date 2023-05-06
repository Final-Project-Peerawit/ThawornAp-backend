const connection = require("../../connection");

const handlerUpdateRepairDateListReport = (req, res) => {
  const { report_dt, is_time_not_match, is_new_time } = req.body;
  const { state_id } = req.query;
  const { report_id } = req.params;
  const queryStateId = state_id
    ? `, state_id = ${connection.escape(state_id)}`
    : "";

  try {
    connection.query(
      `UPDATE REPORT SET report_dt = ${connection.escape(
        report_dt
      )},  is_time_not_match = ${connection.escape(
        is_time_not_match
      )}, is_new_time = ${connection.escape(is_new_time)}
      ${queryStateId}
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

module.exports = handlerUpdateRepairDateListReport;
