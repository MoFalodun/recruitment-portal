const {
  addUser,
  getUserApplicationByEmail,
  getUserById,
  getUserByEmail,
  updateUserPassword,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
  cloudinaryConfig,
  updateUserByApplication,
} = require("./user");

const { addAdmin,
  getAdminByEmail, updateAdminDetails, updateUserbyAdmin } = require("./admin")

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
  cloudinaryConfig,
  updateAdminDetails,
  updateUserByApplication,
  updateUserbyAdmin,
  
};
