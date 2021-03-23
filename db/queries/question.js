module.exports = {
  createQuestionTable: `
  CREATE TABLE IF NOT EXISTS questions (
    id uuid PRIMARY KEY,
    title varchar unique not null,
    option_a varchar not null,
    option_b varchar not null,
    option_c varchar not null,
    correct_answer varchar not null,
    created_at TIMESTAMPTZ default now(),
    updated_at TIMESTAMPTZ default now()
);
  `,

  insertQuestions: `
    INSERT INTO questions
      ( id, title, option_a, option_b, option_c, correct_answer) 
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,

  fetchQuestionsById: 'SELECT id, title, option_a, option_b, option_c FROM questions WHERE id = $1',
  fetchQuestionsByTitle: 'SELECT id, title, option_a, option_b, option_c FROM questions WHERE title = $1',

  updateQuestionsById: `
    UPDATE todo
    SET 
      title = $1,
      updated_at=NOW()
    WHERE id = $2
    RETURNING *;
  `,

  deleteQuestionsById: 'DELETE FROM questions WHERE id = $1',

  fetchQuestions: 'SELECT id, title, option_a, option_b, option_c FROM questions',

};
