module.exports = {
  createAdminTable: `CREATE TABLE IF NOT EXISTS admin_info (
            id uuid PRIMARY KEY,
            email varchar unique not null,
            name varchar not null,
            phone_number varchar not null,
            country varchar not null,
            picture varchar,
            address varchar not null,
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
            address,
            password
            ) values ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id, email, name, phone_number, country, picture, address created_at;`,

  fetchAdminByEmail: "SELECT * FROM admin_info WHERE email = $1",

  updateAdminPassword: `UPDATE admin_info
  SET 
    password = $1,
    updated_at = NOW()
  WHERE email = $2
  RETURNING *;`,

  updateAdmin: `UPDATE admin_info
  SET 
  name = $1,
  phone_number = $2,
  country = $3,
  address = $4,
  updated_at = NOW()
  WHERE email = $5
  RETURNING *;`,

  updateUserStatusbyID: `UPDATE user_application
  SET
  application_status = $1,
    updated_at = NOW()
  WHERE user_id = $2
  RETURNING *;`
  
};
