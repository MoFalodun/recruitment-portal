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
  getTimer
  } = require("./user");

const { addAdmin,
  getAdminByEmail, updateAdminDetails, updateUserbyAdmin, fetchAllApplicants, addTimer } = require("./admin")

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
  fetchAllApplicants,
  addTimer,
  getTimer,
};
