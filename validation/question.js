const Joi = require('joi');

const questionSchema = Joi.object({
  title: Joi.string().min(10).max(70).required(),
  picture: Joi.string(),
  optionA: Joi.string().min(1).max(70).required(),
  optionB: Joi.string().min(1).max(70).required(),
  optionC: Joi.string().min(1).max(70).required(),
  optionD: Joi.string().min(1).max(70).required(),
  correctAnswer: Joi.string().min(1).max(70).required(),
});

module.exports = questionSchema;
