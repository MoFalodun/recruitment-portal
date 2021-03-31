const Joi = require('joi');
const myCustomJoi = Joi.extend(require('joi-phone-number'));

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(3).max(100).required(),
  lastName: Joi.string().min(3).max(100).required(),
  phoneNumber: myCustomJoi.string().phoneNumber().required(),
  password: Joi.string().min(7).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

const applicationSchema = Joi.object({
  dob: Joi.date().less('now').required(),
  address: Joi.string().min(3).max(100).required(),
  university: Joi.string().required(),
  course: Joi.string().min(3).max(100).required(),
  cgpa: Joi.number().less(8).positive().precision(2).required(),
  cv: Joi.string(),
  picture: Joi.string(),
});

const updatePasswordSchema = Joi.object({
  password: Joi.string().min(7).required()
});

module.exports = {
  signupSchema,
  loginSchema,
  applicationSchema,
};
