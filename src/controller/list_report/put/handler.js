const connection = require("../../../connection");

const handlerUpdateListReport = (req, res) => {
  const { report_id } = req.body;
  try {
    connection.query(
      `UPDATE REPORT SET active = 0
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

module.exports = handlerUpdateListReport;
