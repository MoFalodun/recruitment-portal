const { authenticate, adminAccessValidator, isAuth } = require("./auth");
const { validateSignup, validateLogin, checkIfUserExists, validateApplication, authenticateEmail, checkForUserProfile } = require("./user");
const { validateQuestions, checkIfQuestionExists } = require("./question");
const { checkIfAdminExists,
  validateAdminLogin,
  validateAdminSignup } = require("./admin")

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
  checkIfAdminExists,
  validateAdminLogin,
  validateAdminSignup,
  isAuth,
};
