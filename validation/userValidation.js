const { check } = require("express-validator");
const User = require("../models/User");

exports.validateUser = [
  check("name", "Name is Required").not().isEmpty(),
  check("email", "Email is Required").not().isEmpty(),
  check("email", "Invalid Email")
    .isEmail()
    .custom(async (email) => {
      const existingUser = await User.findOne({ email });
      if (email === existingUser?.email) {
        throw new Error("Email Already In Use");
      }
    }),
  check("password", "Password is Required").not().isEmpty(),
  check("role", "Role is Required").not().isEmpty(),
];
