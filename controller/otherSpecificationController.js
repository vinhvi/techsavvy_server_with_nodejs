const OtherSpecification = require("../models/otherSpecificationModel");

//Thêm thông số
exports.addOther = async (req, res, next) => {
  try {
    const { productId, title, price } = req.body;
    const otherSpecification = await OtherSpecification.create({
      productId,
      title,
      price,
    });
    res.status(200).json(otherSpecification);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

//update thong so
exports.updateOther = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;
    const other = await OtherSpecification.findByPk(id);
    if (!other) {
      res.status(404).json({ message: "other not found !" });
      return;
    }

    await other.update({ title: title, price: price });
    const otherAfter = await OtherSpecification.findByPk(id);
    res.status(200).json(otherAfter);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Lấy thông số khác
exports.getOther = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const other = await OtherSpecification.findOne(productId);
    if (!other) {
      res.status(404).json("Không tìm thấy !!");
      return;
    }
    res.status(200).json(other);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};


