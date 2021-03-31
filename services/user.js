const db = require("../db/setup");
const { generateUUID } = require("../utils");
const cloudinary = require('cloudinary');
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
  updateUserInfo,
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

const updateUserByApplication = async ()=> {
  db.manyOrNone(updateUserInfo);
};

const cloudinaryConfig = async (cvPath) => {
  try {
    console.log(cvPath)
    const data = await cloudinary.v2.uploader.upload(cvPath);
    return data;
   
    // const photoData = await cloudinary.v2.uploader.upload(photoPath);
    // const data = [cvData];
    // return data;
  } catch (error) {
    return (error);
  }
};

const getUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email]);



const getApplicationByUser = async (userId) =>
  db.oneOrNone(fetchUserProfile, [userId]);

const getAllUsers = async () => db.manyOrNone(fetchAllUsers);

const getUserApplicationByEmail = async (email) =>
  db.oneOrNone(fetchUserApplicationByEmail, [email]);
const getUserById = async (id) => db.oneOrNone(fetchUserById, [id]);
const updateUserPassword = async (data, email) => {
  const { password } = data;
  return db.one(updateUserPasswordById, [password, email]);
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
  cloudinaryConfig,
  updateUserByApplication,
};
