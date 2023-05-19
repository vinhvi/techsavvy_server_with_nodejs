const Order = require("../models/orderModel");

// Tạo hóa đơn
exports.createOrder = async (req, res, next) => {
  try {
    const { userID, total } = req.body;

    const order = await Order.create({ userID, total });
    res.status(201).json(order);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// cập nhật hóa đơn
exports.updateOrder = async (req, res, next) => {
  try {
    const id = req.params;
    const { totalUpdate } = req.body;

    const order = await Order.findByPk(id);
    if (!order) {
      res.status(201).json("The order is not included in database ");
      return;
    }
    await order.update({ total: totalUpdate });
    const orderAfterUpdate = await Order.findByPk(id);
    res.status(201).json(orderAfterUpdate);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
