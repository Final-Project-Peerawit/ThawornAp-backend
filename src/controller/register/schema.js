const Joi = require("joi");
const regex = require("../../utils/regx_check_phone_number/index");

const schema = (req, res, next) => {
  const validateBody = Joi.object().keys({
    firstname: Joi.string().alphanum().min(3).max(30).required(),
    lastname: Joi.string().alphanum().min(3).max(30).required(),
    room_number: Joi.number().required(),
    branch_id: Joi.number().required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string().pattern(regex).required(),
    password: Joi.string().required(),
  });
  const { error } = validateBody.validate(req.body);

  if (!error) {
    next();
  } else {
    return res.status(400).send({ result: error.details });
  }
};

module.exports = schema;
