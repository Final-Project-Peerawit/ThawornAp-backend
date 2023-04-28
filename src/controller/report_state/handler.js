const connection = require("../../connection");

const handlerGetReportState = (req, res) => {
  try {
    connection.query(`SELECT * FROM REPORT_STATE;`, (err, result, _fields) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).json({ result: result });
    });
  } catch (error) {
    return res.status(500).send(err);
  }
};

module.exports = handlerGetReportState;
