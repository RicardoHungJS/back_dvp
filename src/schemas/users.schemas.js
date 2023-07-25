const joi = require('joi');

const userId = joi.number();
const loginName = joi
  .string()
  .regex(/^[a-zA-Z0-9\s]*$/)
  .min(3)
  .max(15);
const avatarUrl = joi.string();
const profileUrl = joi.string();

const createUser = joi.object({
  id: userId.required(),
  loginName: loginName.required(),
  avatarUrl: avatarUrl.required(),
  profileUrl: profileUrl.required(),
});

module.exports = { createUser };
