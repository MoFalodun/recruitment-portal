module.exports = {
  createUserTable: `CREATE TABLE IF NOT EXISTS user_info (
          id uuid PRIMARY KEY,
          email varchar unique not null,
          first_name varchar not null,
          last_name varchar not null,
          phone_number varchar not null,
          password varchar not null,
          date_of_birth varchar ,
          address varchar ,
          university varchar ,
          course_of_study varchar ,
          cgpa INT ,
          cv varchar,
          picture varchar,
          is_admin boolean default 'false',
          applied_at TIMESTAMPTZ default now(),
          created_at TIMESTAMPTZ default now(),
          updated_at TIMESTAMPTZ default now()
      );`,

  createUserApplicationTable: `CREATE TABLE IF NOT EXISTS user_application (
        id uuid PRIMARY KEY,
        first_name varchar not null,
        last_name varchar not null,
        email varchar unique not null,
        date_of_birth varchar not null,
        address varchar not null,
        university varchar not null,
        course_of_study varchar not null,
        cgpa INT not null,
        cv varchar,
        picture varchar,
        user_id uuid REFERENCES user_info NOT NULL,
        is_admin boolean default 'false',
        created_at TIMESTAMPTZ default now(),
        updated_at TIMESTAMPTZ default now()
    );`,

  insertUserApplication: `INSERT INTO user_application (
      id,
      first_name,
      last_name,
      email,
      date_of_birth,
      address,
      university,
      course_of_study,
      cgpa,
      cv,
      picture,
      user_id
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id, first_name, last_name, email, date_of_birth, cv, picture, created_at;`,

  insertUser: `INSERT INTO user_info (
          id,
          email,
          first_name,
          last_name,
          phone_number,
          password
          ) values ($1, $2, $3, $4, $5, $6)
          RETURNING id, email, first_name, last_name, phone_number, created_at;`,

  insertAdmin: `INSERT INTO user_info (
            id,
            email,
            first_name,
            last_name,
            phone_number,
            is_admin,
            password
            ) values ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id, email, first_name, last_name, phone_number, is_admin, created_at;`,

  fetchUserByEmail: "SELECT * FROM user_info WHERE email = $1",
  fetchUserApplicationByEmail: "SELECT * FROM user_application WHERE email = $1",
  fetchUserById: "SELECT * FROM user_info WHERE id = $1",
  fetchAllUsers: "SELECT * FROM user_info",
  fetchUserProfile: "SELECT * FROM user_application WHERE user_id = $1",

  updateUserPasswordById: `UPDATE user_info
  SET 
    password = $1,
    updated_at = NOW()
  WHERE email = $2
  RETURNING *;`,

  fetchAppliedUserDetails: `SELECT user_info.email,
  user_info.email,
  user_info.first_name,
  user_info.last_name,
  user_info.phone_number,
  user_application.date_of_birth,
  user_application.address,
  user_application.university,
  user_application.course_of_study,
  user_application.cgpa,
  user_application.cv,
  user_application.picture,
  user_application.created_at
  FROM user_info
  LEFT JOIN user_application
  ON user_info.id = user_application.user_id
  WHERE user_info.email= $1;`,

updateUserInfo: `UPDATE user_info
SET 
date_of_birth =( SELECT user_application.date_of_birth FROM user_application WHERE user_application.user_id =user_info.id),
address = ( SELECT user_application.address FROM user_application WHERE user_application.user_id =user_info.id),
university = ( SELECT user_application.university FROM user_application WHERE user_application.user_id =user_info.id),
course_of_study = ( SELECT user_application.course_of_study FROM user_application WHERE user_application.user_id =user_info.id),
cgpa = ( SELECT user_application.cgpa FROM user_application WHERE user_application.user_id =user_info.id),
cv = ( SELECT user_application.cv FROM user_application WHERE user_application.user_id =user_info.id),
picture = ( SELECT user_application.picture FROM user_application WHERE user_application.user_id =user_info.id),
applied_at = ( SELECT user_application.created_at FROM user_application WHERE user_application.user_id =user_info.id)
;
`
};
// date_of_birth = U2.date_of_birth,
// address = U2.address,
// university = U2.university,
// course_of_study = U2.course_of_study,
// cgpa = U2.cgpa,
// cv = U2.cv,
// picture = U2.picture,
// applied_at = U2.created_at
// FROM user_info as U1
// LEFT JOIN user_application  as U2 ON U1.id = U2.user_id