module.exports = {
    createApplicationTable: `CREATE TABLE IF NOT EXISTS timer (
            id SERIAL PRIMARY KEY,
            time TIME NOT NULL,
        );`,
    insertApplicationTable: `INSERT INTO application_analysis (current_application)
    SELECT COUNT(id) 
    FROM user_info
    `
    };
