const db = require("../db/setup");
const { generateUUID } = require("../utils");
const { insertAdmin, fetchAdminByEmail, updateAdmin, updateUserStatusbyID } = require("../db/queries/admin");
const { fetchAllUsers, fetchAllAcademyApplicants } = require("../db/queries/user")
const { insertTimer } = require("../db/queries/computation")

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

const addTimer = async (time) => {
  // const { time } = data;
return db.oneOrNone(insertTimer, [time]);
};

const getAdminByEmail = async (email) => db.oneOrNone(fetchAdminByEmail, [email]);

const updateUserbyAdmin = async(data, userID) => {
  const { applicationStatus } = data
  return db.oneOrNone(updateUserStatusbyID, [applicationStatus, userID])
}

const fetchAllApplicants = async () => db.manyOrNone(fetchAllUsers)  // come back to review this code

const fetchAllthatApplied = async () => db.manyOrNone(fetchAllAcademyApplicants)

const updateAdminDetails = async (data, email) => {
  const { name, phoneNumber, country, address, picture } = data;
  return db.one(updateAdmin, [name, phoneNumber, country, address, picture, email])
}

module.exports = {
    addAdmin,
    getAdminByEmail,
    updateAdminDetails,
    updateUserbyAdmin,
    fetchAllApplicants,
    addTimer,
    fetchAllthatApplied,
}
