const { addQuestion, getQuestionByID } = require("../services");

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

const getQuestion = async (req, res) => {
  try {
    await getQuestionByID(req.params.id);
    res.status(200).json({ status: 'success', message: 'question fetched ' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = { addNewQuestion, getQuestion };
