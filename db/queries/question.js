module.exports = {
  createQuestionTable: `
  CREATE TABLE IF NOT EXISTS questions (
    id uuid PRIMARY KEY,
    title varchar unique not null,
    picture varchar,
    option_a varchar not null,
    option_b varchar not null,
    option_c varchar not null,
    option_d varchar not null,
    correct_answer varchar not null,
    created_at TIMESTAMPTZ default now(),
    updated_at TIMESTAMPTZ default now()
);
  `,

  insertQuestions: `
    INSERT INTO questions
      ( id, title, picture, option_a, option_b, option_c, option_d, correct_answer) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `,

  fetchAllQuestions: 'SELECT id, title, picture, option_a, option_b, option_c, option_d FROM questions',
  fetchQuestionsByTitle: 'SELECT id, title, picture, option_a, option_b, option_c, option_d FROM questions WHERE title = $1',

  deleteQuestionsById: 'DELETE FROM questions WHERE id = $1',
  fetchQuestionsByID: 'SELECT id, correct_answer FROM questions WHERE id = $1',

  fetchQuestions: 'SELECT id, title, picture, option_a, option_b, option_c, option_d FROM questions',

};
