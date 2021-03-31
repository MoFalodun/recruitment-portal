const Joi = require('joi');
const myCustomJoi = Joi.extend(require('joi-phone-number'));

const signupAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(3).max(100).required(),
  phoneNumber: myCustomJoi.string().phoneNumber().required(),
  country: Joi.string().required(),
  password: Joi.string().min(7).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  picture: Joi.string(),
});

const loginAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

const updateAdminSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  phoneNumber: myCustomJoi.string().phoneNumber(),
  country: Joi.string(),
  picture: Joi.string(),
});


module.exports = {
  signupAdminSchema,
  loginAdminSchema,
  updateAdminSchema
}