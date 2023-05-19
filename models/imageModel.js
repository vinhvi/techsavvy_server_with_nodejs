const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Image = sequelize.define(
  "Image",
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_images",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Image;
