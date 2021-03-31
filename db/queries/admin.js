module.exports = {
  createAdminTable: `CREATE TABLE IF NOT EXISTS admin_info (
            id uuid PRIMARY KEY,
            email varchar unique not null,
            name varchar not null,
            phone_number varchar not null,
            country varchar not null,
            picture varchar,
            password varchar not null,
            is_admin boolean default 'true',
            created_at TIMESTAMPTZ default now(),
            updated_at TIMESTAMPTZ default now()
        );`,
  insertAdmin: `INSERT INTO admin_info (
            id,
            email,
            name,
            phone_number,
            country,
            picture,
            password
            ) values ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id, email, name, phone_number, country, picture, created_at;`,

  fetchAdminByEmail: "SELECT * FROM admin_info WHERE email = $1",

  updateAdminPassword: `UPDATE admin_info
  SET 
    password = $1,
    updated_at = NOW()
  WHERE email = $2
  RETURNING *;`,

  updateAdminPassword: `UPDATE admin_info
  SET 
  first_name = $1,
  last_name = $2,
  phone_number = $3,
  country = $4,
  updated_at = NOW()
  WHERE email = $5
  RETURNING *;`,

  updateUserStatusbyEmail: `UPDATE user_info
  SET
  application_status = $1,
    updated_at = NOW()
  WHERE email = $2
  RETURNING *;`
};
