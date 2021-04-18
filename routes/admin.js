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
  checkTimerIsSet,
  cloudinaryAdminUpload
} = require("../middlewares");
const { loginAdmin, addNewAdmin, addNewQuestion, updateExistingAdmin, updateUserStatus, getAllApplicants, addAssessmentTimer, logoutAdmin, updateUser, getAllThatApplied, getAllApproved} = require("../controllers");

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
  // validateQuestions,
  checkIfQuestionExists,
  addNewQuestion
);

adminRouter.put('/update', adminAccessValidator, cloudinaryAdminUpload, validateAdminUpdate, updateExistingAdmin )
adminRouter.put('/updateUser/:id', checkIfApplicantExists, updateUserStatus, updateUser)
adminRouter.get('/applicants', adminAccessValidator, getAllApplicants)
adminRouter.get('/allApplicants', adminAccessValidator, getAllThatApplied)
adminRouter.get('/allApproved',adminAccessValidator, getAllApproved)
adminRouter.post('/setTime', addAssessmentTimer)
adminRouter.post('/admin/logout', logoutAdmin)

module.exports = { adminRouter };
