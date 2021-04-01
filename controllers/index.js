const {
  addNewUser,
  loginUser,
  addNewApplication,
  allUsers,
  resetPassword,
  updatePassword,
  logoutUser,
  updateUser,
  getUser
} = require("./user");
const { addNewQuestion, getAllQuestion } = require("./question");
const { loginAdmin, addNewAdmin, updateExistingAdmin, updateUserStatus, getAllApplicants } = require("./admin");

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
  getAllApplicants
};
