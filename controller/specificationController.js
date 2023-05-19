const Specification = require("../models/specificationModel");

// Thêm thông số kỹ thuật
exports.addSpecification = async (req, res, next) => {
  try {
    const {
      productId,
      title,
      describe1,
      describe2,
      describe3,
      describe4,
      describe5,
    } = req.body;
    const specification = await Specification.create({
      productId,
      title,
      describe1,
      describe2,
      describe3,
      describe4,
      describe5,
    });
    res.status(200).json(specification);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

//update specification
exports.updateSpecification = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, describe1, describe2, describe3, describe4, describe5 } =
      req.body;
    const specification = await Specification.findByPk(id);
    if (!specification) {
      res.status(404).json({ message: "specification not found !" });
      return;
    }
    await specification.updateSpecification({
      title: title,
      describe1: describe1,
      describe2: describe2,
      describe3: describe3,
      describe4: describe4,
      describe5: describe5,
    });

    const specificationAfter = await Specification.findByPk(id);
    res.status(200).json(specificationAfter);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
