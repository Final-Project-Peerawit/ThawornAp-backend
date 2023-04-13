const connection = require("../../../connection");
const bcrypt = require("bcryptjs");

const handleUpdateProfile = (req, res) => {
  const { password } = req.body;
  const { login_id } = req.user;
  try {
    bcrypt.hash(password, 10, (err, hash) => {
      connection.query(
        `UPDATE USER_INFO SET password = ${connection.escape(
          hash
        )}WHERE login_id = ${connection.escape(login_id)};`,
        (err, _result, _fields) => {
          if (err) {
            return res.status(400).send(err);
          }
          return res.status(201).json({ message: "ok" });
        }
      );
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handleUpdateProfile;
