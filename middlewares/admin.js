const { signupAdminSchema, loginAdminSchema, updateAdminSchema } = require('../validation');
const { getAdminByEmail, getApplicationByUser } = require('../services');
const validateAdminSignup = (req, res, next) => {
    try {
      const { error } = signupAdminSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

const validateAdminLogin = (req, res, next) => {
    try {
      const { error } = loginAdminSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

const validateAdminUpdate = (req, res, next) => {
  try {
    const { error } = updateAdminSchema.validate(req.body);
    if (!error) {
        return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkIfAdminExists = async (req, res, next) => {
    try {
        const adminMail = await getAdminByEmail(req.body.email);
      if (!adminMail) {
        return next();
      }
      return res.status(404).json({ status: 'fail', message: 'Admin already exists.' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
  };

  const checkIfApplicantExists = async (req, res, next) => {
    try {
      const { id } = req.params;
        const applicantID = await getApplicationByUser(id);
      if (applicantID) {
        return next();
      }
      return res.status(404).json({ status: 'fail', message: 'Applicant does not exist' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
  };

  module.exports = {
    checkIfAdminExists,
    validateAdminLogin,
    validateAdminSignup,
    validateAdminUpdate,
    checkIfApplicantExists
  }
