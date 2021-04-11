const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertQuestions, fetchQuestionsByTitle, fetchAllQuestions, fetchQuestionsByID } = require('../db/queries/question')

const addQuestion= async (data) => {
    const id = generateUUID;
    const { title, optionA, optionB, optionC, optionD, correctAnswer } = data;
    return db.one(insertQuestions, [id, title, optionA, optionB, optionC, optionD, correctAnswer ])
}

const getQuestionByTitle = async (title) => db.oneOrNone(fetchQuestionsByTitle, [title])

const getQuestions = async () => db.manyOrNone(fetchAllQuestions)
const getQuestionsByID = async (id) => db.manyOrNone(fetchQuestionsByID, (id))

module.exports = {
    addQuestion,
    getQuestionByTitle,
    getQuestions,
    getQuestionsByID
}
