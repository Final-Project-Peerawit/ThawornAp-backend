const connection = require("../../../connection");

const handlerUpdateReport = (req, res) => {
  const {
    type_id,
    place_id,
    repair_id,
    report_dt,
    image_file,
    description,
    is_allow,
  } = req.body;

  const { report_id } = req.params;

  try {
    connection.query(
      `UPDATE REPORT SET type_id = ${connection.escape(
        type_id
      )}, place_id = ${connection.escape(place_id)},
      repair_id = ${connection.escape(repair_id)},
      report_dt = ${connection.escape(report_dt)},
      image_file = ${connection.escape(image_file)},
      description = ${connection.escape(description)},
      is_allow = ${connection.escape(
        is_allow
      )} WHERE report_id = ${connection.escape(report_id)};`,
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

module.exports = handlerUpdateReport;
