module.exports = {
  createAdminTable: `CREATE TABLE IF NOT EXISTS admin_info (
            id uuid PRIMARY KEY,
            email varchar unique not null,
            first_name varchar not null,
            last_name varchar not null,
            phone_number varchar not null,
            country varchar not null,
            password varchar not null,
            is_admin boolean default 'true',
            created_at TIMESTAMPTZ default now(),
            updated_at TIMESTAMPTZ default now()
        );`,
  insertAdmin: `INSERT INTO admin_info (
            id,
            email,
            first_name,
            last_name,
            phone_number,
            country,
            password
            ) values ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id, email, first_name, last_name, phone_number, country, created_at;`,

  fetchAdminByEmail: "SELECT * FROM admin_info WHERE email = $1",
};
