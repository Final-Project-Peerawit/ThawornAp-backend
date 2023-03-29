const con = require("../../connection");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const handlerRegister = (req, res) => {
  try {
    const {
      role_id,
      branch_id,
      firstname,
      lastname,
      email,
      phone_number,
      password,
    } = req.body;

    const login_id = uuidv4();

    bcrypt.hash(password, 10, (err, hash) => {
      con.query(
        `INSERT INTO USER_INFO (login_id , role_id, branch_id, firstname, lastname ,email ,phone_number, password) VALUES ('${login_id}','${role_id}','${branch_id}','${firstname}','${lastname}','${email}','${phone_number}','${hash}')`,
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

module.exports = handlerRegister;
