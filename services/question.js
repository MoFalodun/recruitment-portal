const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertQuestions, fetchQuestionsByTitle, fetchQuestionsById } = require('../db/queries/question')

const addQuestion= async (data) => {
    const id = generateUUID;
    const { title, optionA, optionB, optionC, correctAnswer } = data;
    return db.one(insertQuestions, [id, title, optionA, optionB, optionC, correctAnswer ])
}

const getQuestionByTitle = async (title) => db.oneOrNone(fetchQuestionsByTitle, [title])

const getQuestionByID = async (id) => db.oneOrNone(fetchQuestionsById, [id])

module.exports = {
    addQuestion,
    getQuestionByTitle,
    getQuestionByID,
}
