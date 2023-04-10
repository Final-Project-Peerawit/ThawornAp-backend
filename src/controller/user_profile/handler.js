const connection = require("../../connection");

const handlerGetUsesProfile = (req, res) => {
  const { email } = req.user;
  try {
    connection.query(
      `SELECT firstname,lastname,email,phone_number,room_number,branch_id FROM USER_INFO WHERE email = '${email}';`,
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

module.exports = handlerGetUsesProfile;
