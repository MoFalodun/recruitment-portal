module.exports = {
    createApplicationTable: `CREATE TABLE IF NOT EXISTS timer (
            id SERIAL PRIMARY KEY,
            time REAL NOT NULL,
            created_at TIMESTAMPTZ default now(),
            updated_at TIMESTAMPTZ default now()
        );`,
    insertTimer: 'INSERT INTO timer (time) values ($1)',
    fetchTimer: 'SELECT time FROM timer'
};
