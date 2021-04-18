const {
  addNewUser,
  loginUser,
  addNewApplication,
  allUsers,
  resetPassword,
  updatePassword,
  logoutUser,
  updateUser,
  getUser,
  assessmentTime,
  welcomeMessage,
  signUpMessage,
  updateUserScore
} = require("./user");
const { addNewQuestion, getAllQuestion } = require("./question");
const { loginAdmin, addNewAdmin, updateExistingAdmin, updateUserStatus, getAllApplicants, addAssessmentTimer, logoutAdmin, getAllThatApplied, getAllApproved } = require("./admin");

module.exports = {
  addNewUser,
  loginUser,
  addNewQuestion,
  addNewApplication,
  allUsers,
  loginAdmin,
  addNewAdmin,
  getAllQuestion,
  resetPassword,
  updatePassword,
  logoutUser,
  updateExistingAdmin,
  updateUser,
  getUser,
  updateUserStatus,
  getAllApplicants,
  addAssessmentTimer,
  assessmentTime,
  logoutAdmin,
  welcomeMessage,
  signUpMessage,
  getAllThatApplied,
  updateUserScore,
  getAllApproved
};
