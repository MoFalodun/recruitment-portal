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
const { loginAdmin, addNewAdmin, addNewQuestion, updateExistingAdmin, updateUserStatus, getAllApplicants, addAssessmentTimer, logoutAdmin } = require("../controllers");

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
adminRouter.put('/updateUser/:id', adminAccessValidator, checkIfApplicantExists, updateUserStatus)
adminRouter.get('/applicants', adminAccessValidator, getAllApplicants)
adminRouter.post('/setTime', addAssessmentTimer)
adminRouter.post('/admin/logout', logoutAdmin)

module.exports = { adminRouter };
