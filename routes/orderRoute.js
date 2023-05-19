const express = require("express");
const { createOrder } = require("../controller/orderController");
const router = express.Router();
const { project } = require("../middleware/authenMiddleware");

// Tạo hóa đơn
router.post("/create", project, createOrder);

module.exports = router;
