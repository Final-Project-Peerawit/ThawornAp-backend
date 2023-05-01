const connection = require("../../connection");

const handlerGetListAdminData = (req, res) => {
  try {
    connection.query(
      `SELECT
          *
       from
          USER_INFO
       INNER JOIN SELECT_BRANCH ON USER_INFO.branch_id = SELECT_BRANCH.branch_id
       WHERE
          role_id = 2;`,
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

module.exports = handlerGetListAdminData;
