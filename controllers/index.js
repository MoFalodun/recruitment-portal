const {
  addNewUser,
  loginUser,
  addNewApplication,
  allUsers,
  resetPassword,
  updatePassword,
} = require("./user");
const { addNewQuestion, getAllQuestion } = require("./question");
const { loginAdmin, addNewAdmin } = require("./admin");

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
};
