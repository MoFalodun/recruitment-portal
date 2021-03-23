const {
  addUser,
  getUserByUsername,
  getUserById,
  getUserByEmail,
  updateUserDetails,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
} = require("./user");

const { addQuestion, getQuestionByTitle } = require("./question");

module.exports = {
  addUser,
  getUserByUsername,
  getUserById,
  updateUserDetails,
  getUserByEmail,
  addQuestion,
  getQuestionByTitle,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
};
