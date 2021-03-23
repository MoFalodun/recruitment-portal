const mongoose = require('mongoose');

const { Schema } = mongoose;

const applicationSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true},
  address: { type: String, required: true },
  university: { type: String, required: true },
  courseOfStudy: { type: String, required: true },
  cgpa: { type: String, required: true },
  isAdmin: { type: Boolean, default: 'false' },
}, { timestamps: true });

const signUpSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 7 },
  confirmPassword: { type: String, required: true, minLength: 7 },
  isAdmin: { type: Boolean, default: 'false' },
}, { timestamps: true });

const ApplicationModel = mongoose.model('application', applicationSchema);
const SignUpModel = mongoose.model('signup', signUpSchema);

module.exports = {
  ApplicationModel,
  SignUpModel,
};
