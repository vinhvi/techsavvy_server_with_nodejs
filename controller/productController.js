const Product = require("../models/productModel");

// Thêm 1 product
exports.addProduct = async (req, res, next) => {
  try {
    const {
      name,
      producer,
      supplier,
      inputDay,
      price,
      inputPrice,
      count,
      type,
      exchage,
    } = req.body;

    // Lưu product
    const product = await Product.create({
      name,
      producer,
      supplier,
      inputDay,
      price,
      inputPrice,
      count,
      type,
      exchage,
    });
    res.status(200).json(product);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Cập nhật product
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      producer,
      supplier,
      inputDay,
      price,
      inputPrice,
      count,
      type,
      exchage,
    } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ message: "product not found" });
      return;
    }
    product.name = name;
    product.producer = producer;
    product.supplier = supplier;
    product.inputDay = inputDay;
    product.price = price;
    product.inputPrice = inputPrice;
    product.count = count;
    product.type = type;
    product.exchage = exchage;
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//Lấy tất cả product
exports.getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// Cập nhật số lượng của product
exports.updateCount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const count = req.body.count;
    const product = await Product.findByPk(id);
    await product.update({ count: count });
    const productAfter = await Product.findByPk(id);
    res.status(201).json(productAfter);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
