const db = require("../db/setup");
const { generateUUID } = require("../utils");
const { insertAdmin, fetchAdminByEmail, updateAdmin, updateUserStatusbyID } = require("../db/queries/admin");

const addAdmin = async (data) => {
    const id = generateUUID;
    const { email, name, phoneNumber, country, picture, address, password } = data;
    return db.one(insertAdmin, [
      id,
      email,
      name,
      phoneNumber,
      country,
      picture,
      address,
      password,
    ]);
};

const getAdminByEmail = async (email) => db.oneOrNone(fetchAdminByEmail, [email]);

const updateUserbyAdmin = async(data, userID) => {
  const { applicationStatus } = data
  return db.oneOrNone(updateUserStatusbyID, [applicationStatus, userID])
}

const updateAdminDetails = async (data, email) => {
  const { name, phoneNumber, country, address } = data;
  return db.one(updateAdmin, [name, phoneNumber, country, address, email])
}

module.exports = {
    addAdmin,
    getAdminByEmail,
    updateAdminDetails,
    updateUserbyAdmin,
}
