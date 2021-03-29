const { verifyToken } = require('../utils');
const session = require('express-session');

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    const token = authorization.split(' ')[1];
    const { err, data } = verifyToken(token);
    if (err) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    req.user = data;
    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
};

const adminAccessValidator = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    const token = authorization.split(' ')[1];
    const { err, data } = verifyToken(token);
    if (err) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    req.user = data;
    if (req.user.isAdmin) {
      console.log(req.user)
      return next();
    } console.log(req.user)
    return res.status(403).json({ status: 'fail', message: 'Only admins can access this' });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
};

const isAuth = (req, res, next) => {
  try {
    if(req.session.isAuth){
    next()
  }else{
    console.log(req.session)
  }
}
  catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
}

module.exports = { authenticate, adminAccessValidator, isAuth };
