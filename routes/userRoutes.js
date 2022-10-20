const express = require("express");
const userController = require("../controllers/userController");
const { validateUser } = require("../validation/userValidation");
const router = express.Router();

router.post("/", validateUser, userController.createUser);

module.exports = router;
