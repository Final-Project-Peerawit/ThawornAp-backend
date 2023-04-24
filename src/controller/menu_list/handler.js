const connection = require("../../connection");

const handlerGetMenuByRoleId = (req, res) => {
  const { role_id } = req.user;
  try {
    connection.query(
      `SELECT ROLE_LIST.role_list_id,ROLE_LIST.role_id,FUNCTION_LIST.function_id,THAWORN_ROLE.role_name,FUNCTION_LIST.function_name_th,FUNCTION_LIST.function_name_en FROM ROLE_LIST INNER JOIN FUNCTION_LIST ON ROLE_LIST.function_id = FUNCTION_LIST.function_id INNER JOIN THAWORN_ROLE ON ROLE_LIST.role_id = THAWORN_ROLE.role_id WHERE ROLE_LIST.role_id = ${connection.escape(
        role_id
      )} ORDER BY ROLE_LIST.role_list_id;`,
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

module.exports = handlerGetMenuByRoleId;
