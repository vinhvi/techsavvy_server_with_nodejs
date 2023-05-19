const express = require("express");
const {
  createDescribe,
  deleteDescribe,
  updateDescribe,
  getDescribeById,
} = require("../controller/describeController");
const { addImage, updateImage } = require("../controller/imageController");
const {
  addOther,
  updateOther,
} = require("../controller/otherSpecificationController");
const {
  addProduct,
  getAllProduct,
  updateCount,
} = require("../controller/productController");
const {
  addSpecification,
  updateSpecification,
} = require("../controller/specificationController");
const router = express.Router();
const { project } = require("../middleware/authenMiddleware");

// Thêm product
router.post("/add", project, addProduct);
//Lấy tất cả các sản phẩm
router.get("/all", project, getAllProduct);
// Cập nhật số lượng
router.post("/updateCount/:id", project, updateCount);

// Tạo mô tả cho product
router.post("/createDescribe", project, createDescribe);
//Xóa mô tả product
router.delete("/deleteDescribe/:id", project, deleteDescribe);
//update mô tả
router.post("/updateDescribe/:id", project, updateDescribe);
//Lấy mô tả theo productId
router.get("/getDescribe", project, getDescribeById);

// Thêm ảnh cho product
router.post("/addImage", project, addImage);
// update image
router.post("/updateImage/:id", project, updateImage);

// Thêm thông số kỹ thuật
router.post("/addSpecification", project, addSpecification);
//update thông số kỹ thuật
router.post("/updateSpecification/:id", project, updateSpecification);

//Thêm thông số khác
router.post("/addOther", project, addOther);
//update thông số khác
router.post("/updateOther/:id", project, updateOther);


module.exports = router;
