const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    producer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inputDay: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    inputPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exchage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_products",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Product;
