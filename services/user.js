const db = require("../db/setup");
const { generateUUID } = require("../utils");
const cloudinary = require('cloudinary');
const {
  insertUser,
  fetchUserByEmail,
  fetchUserById,
  insertUserApplication,
  fetchUserProfile,
  fetchAllUsers,
  fetchUserApplicationByEmail,
  updateUserPasswordById,
  updateUserInfo,
} = require("../db/queries/user");
const { fetchTimer } = require("../db/queries/computation")

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

const updateUserByApplication = async ()=> {
  db.manyOrNone(updateUserInfo);
};

const cloudinaryConfig = async (cvPath) => {
  try {
    const data = await cloudinary.v2.uploader.upload(cvPath);
    return data;
  } catch (error) {
    return (error);
  }
};

const getUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email]);

const getApplicationByUser = async (userId) =>
  db.oneOrNone(fetchUserProfile, [userId]);

const getAllUsers = async () => db.manyOrNone(fetchAllUsers);

// change to ID
const getUserApplicationByEmail = async (id) =>
  db.oneOrNone(fetchUserApplicationByEmail, [id]);
const getUserById = async (id) => db.oneOrNone(fetchUserById, [id]);
const updateUserPassword = async (data, email) => {
  const { password } = data;
  return db.one(updateUserPasswordById, [password, email]);
};

const getTimer = async () => db.oneOrNone(fetchTimer)

module.exports = {
  addUser,
  getUserById,
  updateUserPassword,
  getUserByEmail,
  addUserApplication,
  getApplicationByUser,
  getAllUsers,
  getUserApplicationByEmail,
  cloudinaryConfig,
  updateUserByApplication,
  getTimer,
};
