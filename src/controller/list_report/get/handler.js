const connection = require("../../../connection");

const handlerGetListReport = (req, res) => {
  const { reportId, branchId, stateId, roomNumber, startDt, endDt } = req.query;
  const queryReportId = reportId
    ? `AND REPORT.report_id = ${connection.escape(reportId)}`
    : "";
  const queryBranchId =
    branchId && branchId != 0
      ? `AND USER_INFO.branch_id = ${connection.escape(branchId)}`
      : "";
  const queryStateId = stateId
    ? `AND REPORT.state_id = ${connection.escape(stateId)}`
    : "";
  const queryRoomNumber = roomNumber
    ? `AND USER_INFO.room_number = ${connection.escape(roomNumber)}`
    : "";
  const queryDate =
    startDt && endDt
      ? `AND REPORT.create_dt BETWEEN ${connection.escape(
          startDt
        )} AND ${connection.escape(endDt)}`
      : "";

  try {
    connection.query(
      `SELECT
      REPORT.report_id,
      REPORT.login_id,
      USER_INFO.branch_id,
      SELECT_BRANCH.branch_name,
      USER_INFO.room_number,
      USER_INFO.firstname,
      USER_INFO.lastname,
      USER_INFO.email,
      USER_INFO.phone_number,
      REPORT.type_id,
      TIME_SLOT.time_id,
      SELECT_PLACE_TYPE.type_name,
      REPORT.place_id,
      REPORT.is_time_not_match,
      REPORT.description_notify,
      REPORT.is_new_time,
      SELECT_PLACE.place_name,
      REPORT.repair_id,
      SELECT_ITEM_REPAIR.repair_name,
      REPORT.state_id,
      REPORT_STATE.state_name,
      REPORT.image_file,
      REPORT.description,
      REPORT.is_allow,
      REPORT.report_dt,
      REPORT.create_dt,
      REPORT.active
  FROM
      REPORT
      INNER JOIN USER_INFO ON USER_INFO.login_id = REPORT.login_id
      INNER JOIN SELECT_BRANCH ON USER_INFO.branch_id = SELECT_BRANCH.branch_id
      INNER JOIN SELECT_PLACE ON REPORT.place_id = SELECT_PLACE.place_id
      INNER JOIN SELECT_PLACE_TYPE ON REPORT.type_id = SELECT_PLACE_TYPE.type_id
      INNER JOIN SELECT_ITEM_REPAIR ON REPORT.repair_id = SELECT_ITEM_REPAIR.repair_id
      INNER JOIN REPORT_STATE ON REPORT.state_id = REPORT_STATE.state_id
      INNER JOIN TIME_SLOT ON TIME_SLOT.report_id = REPORT.report_id
      WHERE 1 = 1
      ${queryReportId}
      ${queryBranchId}
      ${queryStateId}
      ${queryRoomNumber}
      ${queryDate}
      AND REPORT.active = 1
      ORDER BY REPORT.create_dt DESC;`,
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

module.exports = handlerGetListReport;
