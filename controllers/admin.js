const { addAdmin,
    getAdminByEmail, } = require("../services");
const { hashPassword, comparePassword, addDataToToken } = require("../utils");
const addNewAdmin = async (req, res) => {
  try {
    const hashedPassword = hashPassword(req.body.password);
    const newAdmin = await addAdmin({ ...req.body, password: hashedPassword });
    res
      .status(201)
      .json({
        status: "success",
        message: "Admin registered successfully",
        data: newAdmin,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await getAdminByEmail(email);
    if (admin && comparePassword(password, admin.password)) {
      delete admin.password;
      const token = addDataToToken({
        email,
        isAdmin: admin.is_admin,
        id: admin.id,
      });
      return res
        .status(200)
        .json({
          status: "success",
          message: "User logged in successfully",
          data: { token, admin },
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
    loginAdmin,
    addNewAdmin,
}