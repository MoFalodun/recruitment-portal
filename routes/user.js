const { Router } = require('express');
const { validateSignup,
    checkIfUserExists, validateLogin, validateQuestions, authenticate, adminAccessValidator, checkIfQuestionExists, validateApplication, authenticateEmail, checkForUserProfile } = require('../middlewares');
const {
    addNewUser, loginUser, addNewQuestion, addNewApplication, allUsers, getAllQuestion, resetPassword, updatePassword
} = require('../controllers');

const userRouter = Router();

// for user signup
userRouter.post('/signup', validateSignup, checkIfUserExists, addNewUser );
// for user login
userRouter.post('/login', validateLogin, loginUser, );
//for application
userRouter.post('/apply', authenticate,  validateApplication, checkForUserProfile, authenticateEmail, addNewApplication );
// for questions
userRouter.get('/user/question', authenticate, getAllQuestion );
userRouter.post('/user/reset', resetPassword );
userRouter.put('/resetPassword/:token', updatePassword)

module.exports = { userRouter }