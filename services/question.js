const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertQuestions, fetchQuestionsByTitle, fetchAllQuestions, fetchQuestionsByID } = require('../db/queries/question')

const addQuestion= async (data) => {
   const questions = await data.questions.map(  el => {
    const id = generateUUID()
   return   db.one(insertQuestions, [id, el.title, el.picture, el.optionA, el.optionB, el.optionC, el.optionD, el.correctAnswer ])
})
const dd = await Promise.all(questions);
console.log(dd);
return dd;
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
