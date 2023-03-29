const con = require("../../connection");
const jwt = require("jsonwebtoken");

const secret = "test-token-login";
const handlerAuthen = (req, res) => {
  try {
    const tokens = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(tokens, secret);
    res.json({ decoded });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerAuthen;
