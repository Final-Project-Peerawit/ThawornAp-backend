const handlerRegisterAdmin = require("./handler");
const schema = require("./schema");
const preHandlerRegisterAdmin = require("./prehandler");

const handleRegisterAdmin = [
  schema,
  preHandlerRegisterAdmin,
  handlerRegisterAdmin,
];

module.exports = handleRegisterAdmin;
