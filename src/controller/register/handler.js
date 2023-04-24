const connection = require("../../connection");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const TYPE_ROLE = require("../../enums/type_roleid");

const handlerRegister = (req, res) => {
  try {
    const {
      branch_id,
      firstname,
      lastname,
      email,
      phone_number,
      password,
      room_number,
    } = req.body;

    const login_id = uuidv4();
    const role_id = TYPE_ROLE.USER;
    const active = 1;
    bcrypt.hash(password, 10, (err, hash) => {
      connection.query(
        `INSERT INTO
        USER_INFO (
            login_id,
            role_id,
            branch_id,
            firstname,
            lastname,
            email,
            phone_number,
            password,
            room_number,
            active
        )
        VALUES
        (
            ${connection.escape(login_id)},
            ${connection.escape(role_id)},
            ${connection.escape(branch_id)},
            ${connection.escape(firstname)},
            ${connection.escape(lastname)},
            ${connection.escape(email)},
            ${connection.escape(phone_number)},
            ${connection.escape(hash)},
            ${connection.escape(room_number)},
            ${connection.escape(active)}
        );`,
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
