const { Router } = require('express');
const { validateSignup,
    checkIfUserExists, validateLogin, validateQuestions, authenticate, adminAccessValidator, checkIfQuestionExists, validateApplication, authenticateEmail, checkForUserProfile, isAuth, cloudinaryUpload, validatePasswordUpdate} = require('../middlewares');
const {
    addNewUser, loginUser, addNewQuestion, addNewApplication, allUsers, getAllQuestion, resetPassword, updatePassword, logoutUser, updateUser, getUser
} = require('../controllers');

const userRouter = Router();

// for user signup
userRouter.post('/signup', validateSignup, checkIfUserExists, addNewUser );
// for user login
userRouter.post('/login', validateLogin, loginUser);
//to upload picture
userRouter.post('/upload', cloudinaryUpload );
//for application
userRouter.post('/apply', authenticate, cloudinaryUpload, validateApplication, checkForUserProfile, addNewApplication );
// to merge user_info with user_application
userRouter.put('/merge', updateUser )
// for questions
userRouter.get('/user/question', getAllQuestion );
// to get reset password link
userRouter.post('/user/reset', resetPassword );
// to reset password
userRouter.put('/resetPassword/:token', validatePasswordUpdate, updatePassword)
//to logout
userRouter.post('/logout', logoutUser)
// to get a single logged in User
userRouter.get('/singleUser', getUser)

module.exports = { userRouter }