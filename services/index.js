const {
  addUser,
  getUserApplicationByEmail,
  getUserById,
  getUserByEmail,
  updateUserDetails,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
} = require("./user");

const { addAdmin,
  getAdminByEmail,} = require("./admin")

const { addQuestion, getQuestionByTitle, getQuestionByID } = require("./question");

module.exports = {
  addUser,
  getUserApplicationByEmail,
  getUserById,
  updateUserDetails,
  getUserByEmail,
  addQuestion,
  getQuestionByTitle,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
  addAdmin,
  getAdminByEmail,
  getQuestionByID,
};
