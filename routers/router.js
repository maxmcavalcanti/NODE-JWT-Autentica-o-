const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

//Open route - Public Route
router.get("/", userController.publicAccess);

//Private Route
router.get(
  "/user/:id",
  userController.checkToken,
  userController.privateAccess
);

//Register User
router.post("/auth/register", userController.registerUser);

//Login User

router.post("/auth/login", userController.userLogin);

module.exports = router;
