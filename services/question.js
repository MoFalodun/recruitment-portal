const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertQuestions, fetchQuestionsByTitle, fetchAllQuestions } = require('../db/queries/question')

const addQuestion= async (data) => {
    const id = generateUUID;
    const { title, optionA, optionB, optionC, optionD, correctAnswer } = data;
    return db.one(insertQuestions, [id, title, optionA, optionB, optionC, optionD, correctAnswer ])
}

const getQuestionByTitle = async (title) => db.oneOrNone(fetchQuestionsByTitle, [title])

const getQuestions = async () => db.manyOrNone(fetchAllQuestions)

module.exports = {
    addQuestion,
    getQuestionByTitle,
    getQuestions,
}
