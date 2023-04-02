const con = require("../../connection");

const preHandlerRegisterAdmin = (req, res, next) => {
  const { email } = req.body;
  try {
    con.query(
      `SELECT email FROM USER_INFO WHERE email = '${email}';`,
      (err, result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }

        if (result[0] === undefined) {
          next();
        } else {
          return res
            .status(400)
            .send({ result: `email ${email} is already used` });
        }
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = preHandlerRegisterAdmin;
