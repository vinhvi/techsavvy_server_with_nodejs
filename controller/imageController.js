const Image = require("../models/imageModel");

// Thêm image cho product
exports.addImage = async (req, res, next) => {
  try {
    const { productId, link } = req.body;
    const image = await Image.create({ productId, link });
    res.status(200).json(image);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// update image
exports.updateImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { link } = req.body.link;
    const image = await Image.findByPk(id);
    if (!image) {
      res.status(404).json({ message: "image not found !" });
      return;
    }
    await image.update({ link: link });

    const imageAfter = await Image.findByPk(id);
    res.status(200).json(imageAfter);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
