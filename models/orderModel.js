const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "tb_orders",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Order;
