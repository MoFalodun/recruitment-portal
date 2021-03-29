module.exports = {
createSessionTable: `CREATE TABLE user_sessions(
    Id SERIAL PRIMARY KEY,
    sid varchar not null,
    sess varchar NOT NULL,
    is_auth boolean default 'false',
    expire TIMESTAMPTZ NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL);`
};