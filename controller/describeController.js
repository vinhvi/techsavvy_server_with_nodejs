const Describe = require("../models/describeModel");

// Tạo mô tả cho product
exports.createDescribe = async (req, res, next) => {
  try {
    const { productId, title, content } = req.body;
    const describe = await Describe.create({ productId, title, content });
    res.status(201).json(describe);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

//update mô tả
exports.updateDescribe = async (req, res, next) => {
  try {
    const id = req.params;
    const { title, content } = req.body;

    const describe = await Describe.findByPk(id);
    if (!describe) {
      res.status(201).json("The describe is not included in database ");
      return;
    }
    await describe.update({ title: title, content: content });
    const describeAfter = await Describe.findByPk(id);
    res.status(201).json(describeAfter);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Xóa mô tả product
exports.deleteDescribe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const describe = await Describe.findByPk(id);
    if (!describe) {
      res.status(201).json("The describe is not included in database ");
      return;
    }
    await describe.destroy();
    res.status(200).json("success");
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
// Lấy các mô tả theo productId
exports.getDescribeById = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const describes = await Describe.findAll({
      where: { productId: productId },
    });
    if (!describes) {
      res.status(200).json("Chưa có mô tả nào cho sản phẩm này");
      return;
    }
    res.status(200).json(describes);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
