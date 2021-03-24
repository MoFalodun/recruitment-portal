const questionSchema = require("./question");
const {
  signupSchema,
  loginSchema,
  applicationSchema,
} = require("./user");
const { signupAdminSchema, loginAdminSchema } = require("./admin");

module.exports = {
  signupSchema,
  loginSchema,
  applicationSchema,
  questionSchema,
  signupAdminSchema,
  loginAdminSchema,
};
