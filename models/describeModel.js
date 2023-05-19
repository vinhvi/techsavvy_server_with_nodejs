const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB");

const Describe = sequelize.define(
  "Describe",
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
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_describes",
    timestamps: true,
  }
);
sequelize.sync();
sequelize.sync({ force: false });

module.exports = Describe;
