const db = require("../db/setup");
const { generateUUID } = require("../utils");
const {
  insertUser,
  fetchUserByEmail,
  fetchUserById,
  updateUserById,
  insertUserApplication,
  fetchUserProfile,
  fetchAllUsers,
  fetchUserApplicationByEmail,
  updateUserPasswordById,
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
    cv,
    picture,
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
    cv,
    picture,
    userId,
  ]);
};

const getUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email]);

const getApplicationByUser = async (userId) =>
  db.oneOrNone(fetchUserProfile, [userId]);

const getAllUsers = async () => db.manyOrNone(fetchAllUsers);

const getUserApplicationByEmail = async (email) =>
  db.oneOrNone(fetchUserApplicationByEmail, [email]);
const getUserById = async (id) => db.oneOrNone(fetchUserById, [id]);
const updateUserPassword = async (data, userId) => {
  const { email, password } = data;
  return db.one(updateUserPasswordById, [email, password, userId]);
};

module.exports = {
  addUser,
  getUserById,
  updateUserPassword,
  getUserByEmail,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
  getUserApplicationByEmail,
};
