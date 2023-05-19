const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Discount = sequelize.define(
  "Discount",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    stop: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    down: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_discount",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Discount;
