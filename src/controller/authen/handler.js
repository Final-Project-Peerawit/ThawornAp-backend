const jwt = require("jsonwebtoken");
require("dotenv/config");

const secret = process.env.SECRET_KEY;
const handlerAuthen = (req, res) => {
  try {
    const tokens = req.headers.authorization;
    const decoded = jwt.verify(tokens, secret);
    res.json({ decoded });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerAuthen;
