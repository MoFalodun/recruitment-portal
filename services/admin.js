const db = require("../db/setup");
const { generateUUID } = require("../utils");
const { insertAdmin, fetchAdminByEmail, updateAdminPassword, updateUserStatusbyEmail } = require("../db/queries/admin");

const addAdmin = async (data) => {
    const id = generateUUID;
    const { email, name, phoneNumber, country, picture, password } = data;
    return db.one(insertAdmin, [
      id,
      email,
      name,
      phoneNumber,
      country,
      picture,
      password,
    ]);
};

const getAdminByEmail = async (email) => db.oneOrNone(fetchAdminByEmail, [email]);

const updateUserbyAdmin = async(data, email) => {
  const { applicationStatus } = data
  return db.oneOrNone(updateUserStatusbyEmail, [applicationStatus, email])
}

const updateAdminDetails = async (data, email) => {
  const { firstName, lastName, phoneNumber, country, } = data;
  return db.one(updateAdminPassword, [firstName, lastName, phoneNumber, country, email])
}

module.exports = {
    addAdmin,
    getAdminByEmail,
    updateAdminDetails,
    updateUserbyAdmin,
}
