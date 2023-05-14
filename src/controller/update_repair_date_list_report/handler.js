const connection = require("../../connection");
const request = require("request");
const accessToken = "xQhobCOcCO5KYcZazN5WIqlwFJBWLjiz4HOXOZ1tSoQ";

const handlerUpdateRepairDateListReport = (req, res) => {
  const { report_dt, is_time_not_match, is_new_time } = req.body;
  const { state_id } = req.query;
  const { report_id } = req.params;
  const queryStateId = state_id
    ? `, state_id = ${connection.escape(state_id)}`
    : "";
  const message = `\nรหัสการแจ้ง ${report_id}\nได้แจ้งเวลาเข้ามาใหม่`;

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
        const options = {
          method: "POST",
          url: "https://notify-api.line.me/api/notify",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
          body: `message=${message}`,
        };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          return res.status(201).json({ message: "ok" });
        });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerUpdateRepairDateListReport;
