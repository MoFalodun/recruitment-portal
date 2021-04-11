const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertQuestions, fetchQuestionsByTitle, fetchAllQuestions, fetchQuestionsByID } = require('../db/queries/question')

const addQuestion= async (data) => {
    const id = generateUUID;
    const { title, picture, optionA, optionB, optionC, optionD, correctAnswer } = data;
    return db.manyOrNone(insertQuestions, [id, title, picture, optionA, optionB, optionC, optionD, correctAnswer ])
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
