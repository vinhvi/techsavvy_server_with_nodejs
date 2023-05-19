const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "tb_orderDetails",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = OrderDetail;
