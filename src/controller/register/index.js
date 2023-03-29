const handlerRegister = require("./handler");
const preHandlerRegister = require("./prehandler");

const handleRegister = [preHandlerRegister, handlerRegister];

module.exports = handleRegister;
