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
          application_status varchar default 'Not applied',
          applied_at TIMESTAMPTZ default now(),
          created_at TIMESTAMPTZ default now(),
          updated_at TIMESTAMPTZ default now()
      );`,

  createUserApplicationTable: `CREATE TABLE IF NOT EXISTS user_application (
        id uuid PRIMARY KEY,
        date_of_birth varchar not null,
        address varchar not null,
        university varchar not null,
        course_of_study varchar not null,
        cgpa INT not null,
        cv varchar,
        picture varchar,
        user_id uuid REFERENCES user_info NOT NULL,
        application_status varchar default 'Pending',
        score INT ,
        created_at TIMESTAMPTZ default now(),
        updated_at TIMESTAMPTZ default now()
    );`,

  insertUserApplication: `INSERT INTO user_application (
      id,
      date_of_birth,
      address,
      university,
      course_of_study,
      cgpa,
      cv,
      picture,
      user_id
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, date_of_birth, cv, picture, created_at;`,

  insertUser: `INSERT INTO user_info (
          id,
          email,
          first_name,
          last_name,
          phone_number,
          password
          ) values ($1, $2, $3, $4, $5, $6)
          RETURNING id, email, first_name, last_name, phone_number, created_at;`,

  fetchUserByEmail: "SELECT * FROM user_info WHERE email = $1",
  fetchUserApplicationByEmail: "SELECT * FROM user_application WHERE email = $1",
  fetchUserById: "SELECT * FROM user_info WHERE id = $1",
  fetchAllUsers: `SELECT CONCAT(first_name, ' ', last_name) as name , date_of_birth, address, university, cgpa FROM user_info WHERE application_status = 'Pending';`,
  fetchUserProfile: "SELECT * FROM user_application WHERE user_id = $1",

  // fetchUserApplicationById: "SELECT * FROM user_application WHERE user_id = $1",

  updateUserPasswordById: `UPDATE user_info
  SET 
    password = $1,
    updated_at = NOW()
  WHERE email = $2
  RETURNING *;`,

updateUserInfo: `UPDATE user_info
SET 
date_of_birth =( SELECT user_application.date_of_birth FROM user_application WHERE user_application.user_id =user_info.id),
address = ( SELECT user_application.address FROM user_application WHERE user_application.user_id =user_info.id),
university = ( SELECT user_application.university FROM user_application WHERE user_application.user_id =user_info.id),
course_of_study = ( SELECT user_application.course_of_study FROM user_application WHERE user_application.user_id =user_info.id),
cgpa = ( SELECT user_application.cgpa FROM user_application WHERE user_application.user_id =user_info.id),
cv = ( SELECT user_application.cv FROM user_application WHERE user_application.user_id =user_info.id),
picture = ( SELECT user_application.picture FROM user_application WHERE user_application.user_id =user_info.id),
applied_at = ( SELECT user_application.created_at FROM user_application WHERE user_application.user_id =user_info.id),
application_status = ( SELECT user_application.application_status FROM user_application WHERE user_application.user_id =user_info.id)
;
`
};
