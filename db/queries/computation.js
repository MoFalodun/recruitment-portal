module.exports = {
    createApplicationTable: `CREATE TABLE IF NOT EXISTS application_analysis (
            id SERIAL PRIMARY KEY,
            current_application INT NOT NULL,
            previous_application INT,
            total_application INT
        );`,
    insertApplicationTable: `INSERT INTO application_analysis (current_application)
    SELECT COUNT(id) 
    FROM user_info
    `
    };
