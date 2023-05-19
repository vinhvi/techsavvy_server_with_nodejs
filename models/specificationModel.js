const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Specification = sequelize.define(
  "Specification",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    describe1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    describe2: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    describe3: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    describe4: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    describe5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "tb_specifications",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Specification;
