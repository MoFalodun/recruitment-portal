const {
  addUser,
  getUserApplicationByEmail,
  getUserById,
  getUserByEmail,
  updateUserPassword,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
} = require("./user");

const { addAdmin,
  getAdminByEmail,} = require("./admin")

const { addQuestion, getQuestionByTitle, getQuestions } = require("./question");

module.exports = {
  addUser,
  getUserApplicationByEmail,
  getUserById,
  updateUserPassword,
  getUserByEmail,
  addQuestion,
  getQuestionByTitle,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
  addAdmin,
  getAdminByEmail,
  getQuestions,
};
