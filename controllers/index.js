const {
  addNewUser,
  loginUser,
  addNewApplication,
  allUsers,
} = require("./user");
const { addNewQuestion } = require("./question");
const { loginAdmin, addNewAdmin } = require("./admin");

module.exports = {
  addNewUser,
  loginUser,
  addNewQuestion,
  addNewApplication,
  allUsers,
  loginAdmin,
  addNewAdmin,
};
