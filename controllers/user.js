const { addUser, getUserByEmail, addUserApplication } = require("../services");
const { hashPassword, comparePassword, addDataToToken } = require("../utils");
const addNewUser = async (req, res) => {
  try {
    const hashedPassword = hashPassword(req.body.password);
    const newUser = await addUser({ ...req.body, password: hashedPassword });
    res
      .status(201)
      .json({
        status: "success",
        message: "User registered successfully",
        data: newUser,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

const addNewApplication = async (req, res) => {
  try {
    const userID = req.user.id;
    const newApplication= await addUserApplication({ ...req.body, userId: userID});
    res
      .status(201)
      .json({
        status: "success",
        message: "Application successful",
        data: newApplication,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};
// const addAdminUser = async (req, res) => {
//   try {
//     const hashedPassword = hashPassword(req.body.password);
//     const newUser = await addAdmin({ ...req.body, password: hashedPassword });
//     res
//       .status(201)
//       .json({
//         status: "success",
//         message: "Admin registered successfully",
//         data: newUser,
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ status: "fail", message: "Something went wrong." });
//   }
// };

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (user && comparePassword(password, user.password)) {
      delete user.password;
      const token = addDataToToken({
        email,
        isAdmin: user.is_admin,
        id: user.id,
      });
      return res
        .status(200)
        .json({
          status: "success",
          message: "User logged in successfully",
          data: { token, user },
        });
    }
    return res
      .status(401)
      .json({ status: "fail", message: "Invalid login details" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

module.exports = {
  addNewUser,
  loginUser,
  addNewApplication,
};