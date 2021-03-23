const { questionSchema } = require('../validation');
const { getQuestionByTitle } = require('../services')

const validateQuestions = (req, res, next) => {
    try {
      const { error } = questionSchema.validate(req.body);
      if (!error) {
          return next();
      }
      console.log(error)
      return res.status(400).json({ status: 'fail', message: 'input the right thing' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

const checkIfQuestionExists = async (req, res, next) => {
  try {
      const title = await getQuestionByTitle(req.body.title);
    if (!title) {
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'question already exists.' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
    validateQuestions,
    checkIfQuestionExists
}
