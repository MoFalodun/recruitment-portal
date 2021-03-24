const { Router } = require('express');
const { validateSignup,
    checkIfUserExists, validateLogin, validateQuestions, authenticate, adminAccessValidator, checkIfQuestionExists, validateApplication, authenticateEmail, checkForUserProfile } = require('../middlewares');
const {
    addNewUser, loginUser, addNewQuestion, addNewApplication, allUsers,
} = require('../controllers');

const userRouter = Router();

// for user signup
userRouter.post('/signup', validateSignup, checkIfUserExists, addNewUser );
// for user login
userRouter.post('/login', validateLogin, loginUser, );
//for application
userRouter.post('/apply', authenticate,  validateApplication, checkForUserProfile, authenticateEmail, addNewApplication );

module.exports = { userRouter }