const OrderDetail = require("../models/orderDetailModel");
const Product = require("../models/productModel");

// Tạo chi tiết hóa đơn
exports.createOrderDetail = async (req, res, next) => {
  try {
    const { orderID, productID, quantity, count } = req.body;

    //Tìm sản phẩm trong database
    const product = await Product.findByPk(productID);
    if (!product) {
      res.status(201).json("The product is not included in database ");
      return;
    }
    //Cập nhật số lượng product
    const count1 = product.count;
    const countAfter = count1 - count;
    await product.update({ count: countAfter });
    // Lưu chi tiết hóa đơn
    const orderDetail = await OrderDetail.create({
      orderID,
      productID,
      quantity,
      count,
    });
    res.status(201).json(orderDetail);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
// Lấy các orderDetail với orderId
exports.getOrderDetailByOrderId = async (req, res, next) => {
  try {
    const { orderId } = req.body;

    const orderDetails = await OrderDetail.findAll({
      where: { orderId: orderId },
    });
    res.status(200).json(orderDetails);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
// update orderDetail with id
exports.updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity, count } = req.body;
    const orderDetail = await OrderDetail.findByPk(id);
    if (!orderDetail) {
      res.status(201).json("orderDetail is not included in database ");
      return;
    }
    await orderDetail.update({ quantity: quantity }, { count: count });
    const orderAfterUpdate = await OrderDetail.findByPk(id);
    res.status(200).json(orderAfterUpdate);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
// xóa orderDeyail theo id
exports.deleteById = async (req,res,next)=>{
  try {
    const {id} = req.params
    const orderDetail = await OrderDetail.findByPk(id)
    await orderDetail.destroy();
    res.status(200).json("success")
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
}