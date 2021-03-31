const { Router } = require("express");

const {
  checkIfAdminExists,
  validateAdminLogin,
  validateAdminSignup,
  adminAccessValidator,
  validateQuestions,
  checkIfQuestionExists,
  validateAdminUpdate,
  checkIfApplicantExists,
} = require("../middlewares");
const { loginAdmin, addNewAdmin, addNewQuestion, updateExistingAdmin, updateUserStatus } = require("../controllers");

const adminRouter = Router();

// for admin signup
adminRouter.post(
  "/admin/signup",
  validateAdminSignup,
  checkIfAdminExists,
  addNewAdmin
);
// for admin login
adminRouter.post("/admin/login", validateAdminLogin, loginAdmin);

// for admin to create question
adminRouter.post(
  "/admin/createQuestion",
  adminAccessValidator,
  validateQuestions,
  checkIfQuestionExists,
  addNewQuestion
);

adminRouter.put('/update', adminAccessValidator, validateAdminUpdate, updateExistingAdmin )
adminRouter.put('/updateUser/:email', adminAccessValidator, checkIfApplicantExists, updateUserStatus)

module.exports = { adminRouter };
