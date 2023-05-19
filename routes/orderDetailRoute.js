const express = require("express");
const {
  createOrderDetail,
  getOrderDetailByOrderId,
  updateById,
  deleteById,
} = require("../controller/orderDetailController");
const router = express.Router();
const { project } = require("../middleware/authenMiddleware");

// Tạo hóa đơn
router.post("/createDetail", project, createOrderDetail);
// Lấy orderDetail theo orderId
router.get("/getOrderDetailByoderId", project, getOrderDetailByOrderId);
// update orderDetail by id
router.post("/updatebyId/:id", project, updateById);
// xóa orderDetail by id
router.delete("/deleteByid/:id", project, deleteById);
module.exports = router;
