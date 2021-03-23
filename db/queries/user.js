module.exports = {
  createUserTable: `CREATE TABLE IF NOT EXISTS user_info (
          id uuid PRIMARY KEY,
          email varchar unique not null,
          first_name varchar not null,
          last_name varchar not null,
          phone_number varchar not null,
          password varchar not null,
          is_admin boolean default 'false',
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
      user_id
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id, first_name, last_name, email, date_of_birth created_at;`,

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
  fetchUserById: "SELECT * FROM user_info WHERE id = $1",

  fetchUserProfile: "SELECT * FROM user_application WHERE user_id = $1",
};
