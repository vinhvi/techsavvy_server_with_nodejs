const express = require("express");
const router = express.Router();

const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
  login,
} = require("../controller/userController");

// Tạo mới một user
router.post("/register", createUser);

// Lấy 1 user theo id
router.get("/:id", getUserById);

//Lấy tất cả các user
router.get("/allUser", getAllUsers);

// Cập nhật thông user
router.post("/update/:id", updateUserById);

// LOGIN
router.post("/login", login);

module.exports = router;
