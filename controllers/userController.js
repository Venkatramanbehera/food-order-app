const { validationResult } = require("express-validator");
const User = require("../models/User.js");

const userController = {};

userController.createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const body = req.body;
  const user = new User(body);
  try {
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (error) {
    res.json(error);
  }
};

module.exports = userController;
