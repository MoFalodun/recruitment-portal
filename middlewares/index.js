const { authenticate, adminAccessValidator, authenticateAdmin } = require("./auth");
const { validateSignup, validateLogin, checkIfUserExists, validateApplication, authenticateEmail, checkForUserProfile } = require("./user");
const { validateQuestions, checkIfQuestionExists } = require("./question");

module.exports = {
  authenticate,
  validateSignup,
  validateLogin,
  checkIfUserExists,
  validateQuestions,
  adminAccessValidator,
  checkIfQuestionExists,
  validateApplication,
  authenticateEmail,
  checkForUserProfile,
};
