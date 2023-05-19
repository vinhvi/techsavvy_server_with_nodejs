const express = require("express");
const {
  addSupplier,
  getById,
  getByPhone,
} = require("../controller/supplierController");
const { project } = require("../middleware/authenMiddleware");
const router = express.Router();

// Thêm nhà cung cấp
router.post("/add", project, addSupplier);
// Tìm kiếm theo id nhà cung cấp
router.get("/getById", project, getById);
//Tìm kiếm theo phone
router.get("getByPhone", project, getByPhone);
module.exports = router;
