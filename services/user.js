const db = require("../db/setup");
const { generateUUID } = require("../utils");
const {
  insertUser,
  fetchUserByEmail,
  fetchUserById,
  updateUserById,
  insertUserApplication,
  fetchUserProfile,
} = require("../db/queries/user");
const { insertApplicationTable } = require("../db/queries/computation")

const addUser = async (data) => {
  const id = generateUUID;
  const { email, firstName, lastName, phoneNumber, password } = data;
  return db.one(insertUser, [
    id,
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
  ]);
};

const addUserApplication = async (data) => {
  const id = generateUUID;
  const {
    firstName,
    lastName,
    email,
    dob,
    address,
    university,
    course,
    cgpa,
    userId,
  } = data;
  return db.one(insertUserApplication, [
    id,
    firstName,
    lastName,
    email,
    dob,
    address,
    university,
    course,
    cgpa,
    userId,
  ]);
};

const getUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email]);

const getApplicationByUser = async (userId) =>
  db.oneOrNone(fetchUserProfile, [userId]);

// const addAdmin = async (data) => {
//     const id = generateUUID;
//     const { email, firstName, lastName, phoneNumber, password, isAdmin } = data;
//     return db.one(insertAdmin, [id, email, firstName, lastName, phoneNumber, isAdmin, password ])
// }

const getUserByUsername = async (userName) =>
  db.oneOrNone(fetchUserByUserName, [userName]);
const getUserById = async (id) => db.oneOrNone(fetchUserById, [id]);
const updateUserDetails = async (data, userId) => {
  const { email, firstName, lastName, userName } = data;
  return db.one(updateUserById, [email, firstName, lastName, userName, userId]);
};

module.exports = {
  addUser,
  getUserByUsername,
  getUserById,
  updateUserDetails,
  getUserByEmail,
  addUserApplication,
  getApplicationByUser,
};
