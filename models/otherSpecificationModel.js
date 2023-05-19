const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const OtherSpecification = sequelize.define(
  "OtherSpecification",
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
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
  },
  {
    tableName: "tb_otherSpecification",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = OtherSpecification;
