const { signupSchema, loginSchema, signupAdminSchema, applicationSchema } = require('../validation');
const { getUserByEmail, getApplicationByUser } = require('../services');
const validateSignup = (req, res, next) => {
    try {
      const { error } = signupSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

const validateApplication = (req, res, next) => {
  try {
    const { error } = applicationSchema.validate(req.body);
    if (!error) {
        return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

// const validateAdminSignup = (req, res, next) => {
//   try {
//     const { error } = signupAdminSchema.validate(req.body);
//     if (!error) {
//         return next();
//     }
//     return res.status(400).json({ status: 'fail', message: error.message });
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
//   }
// };

const validateLogin = (req, res, next) => {
    try {
      const { error } = loginSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      console.log(ok)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};
const checkIfUserExists = async (req, res, next) => {
    try {
        const userMail = await getUserByEmail(req.body.email);
      if (!userMail) {
        return next();
      }
      return res.status(404).json({ status: 'fail', message: 'user already exists.' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
  };

const checkForUserProfile = async (req, res, next) => {
    try {
      const profile = await getApplicationByUser( req.user.id);
      if (!profile || profile.length == 0) {
        console.log(req.user.user_id)
        return next();
      }
      return res.status(403).json({ status: 'fail', message: 'You have already applied' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
  };

  const authenticateEmail = async (req, res, next) => {
    try {
      if (req.body.email === req.user.email) {
        return next();
      }
      return res.status(404).json({ status: 'fail', message: ' Email does not match' });
    } catch (error) {
      console.log(error)
      console.log(userMail)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
  };

  module.exports = {
    validateSignup,
    validateLogin,
    checkIfUserExists,
    validateApplication,
    authenticateEmail,
    checkForUserProfile, 
  };
