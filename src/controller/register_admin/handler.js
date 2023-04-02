const conection = require("../../connection");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const handlerRegisterAdmin = (req, res) => {
  try {
    const { branch_id, firstname, lastname, email, phone_number, password } =
      req.body;

    const login_id = uuidv4();
    const role_id = 2;
    const active = 1;
    bcrypt.hash(password, 10, (err, hash) => {
      conection.query(
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
            active
        )
        VALUES
        (
            '${login_id}',
            '${role_id}',
            '${branch_id}',
            '${firstname}',
            '${lastname}',
            '${email}',
            '${phone_number}',
            '${hash}',
            '${active}'
        );`,
        (err, _result, _fields) => {
          conection.destroy();
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

module.exports = handlerRegisterAdmin;
