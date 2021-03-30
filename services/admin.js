const db = require("../db/setup");
const { generateUUID } = require("../utils");
const { insertAdmin, fetchAdminByEmail, updateAdminPassword } = require("../db/queries/admin");

const addAdmin = async (data) => {
    const id = generateUUID;
    const { email, firstName, lastName, phoneNumber, country, password } = data;
    return db.one(insertAdmin, [
      id,
      email,
      firstName,
      lastName,
      phoneNumber,
      country,
      password,
    ]);
};

const getAdminByEmail = async (email) => db.oneOrNone(fetchAdminByEmail, [email]);

const updateAdminDetails = async (data, email) => {
  const { firstName, lastName, phoneNumber, country, } = data;
  return db.one(updateAdminPassword, [firstName, lastName, phoneNumber, country, email])
}

module.exports = {
    addAdmin,
    getAdminByEmail,
    updateAdminDetails,
}
