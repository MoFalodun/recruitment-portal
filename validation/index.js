const questionSchema = require("./question");
const { signupSchema, loginSchema, applicationSchema, signupAdminSchema } = require("./user");

module.exports = {
  signupSchema,
  loginSchema,
  applicationSchema,
  questionSchema,
  signupAdminSchema
};
