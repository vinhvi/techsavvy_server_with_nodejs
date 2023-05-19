const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Supplier = sequelize.define(
  "Supplier",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "tb_suppliers",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Supplier;
