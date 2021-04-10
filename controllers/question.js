const { addQuestion, getQuestions, getQuestionsByID } = require("../services");

const addNewQuestion = async (req, res) => {
  try {
    const newQuestion = await addQuestion(req.body);
    res
      .status(201)
      .json({
        status: "success",
        message: "Question added successfully",
        data: newQuestion,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

const getAllQuestion = async (req, res) => {
  try {
    const questions = await getQuestions();
    res.status(200).json({ status: 'success', message: 'questions fetched successfully', data: questions });
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const compareQuestions = async (req, res, next) => {
  try {
    score = 0
    const question = await getQuestionsByID( req.body.id);
    if (question.correct_answer === req.body.answer) {
      console.log(req.body.id)
      score++;
    }
    return score
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
}

module.exports = { addNewQuestion, getAllQuestion };
