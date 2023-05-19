const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const project = asyncHandler(async (req, res, next) => {

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findByPk(decoded.id);
      next();
    } catch (error) {
      next(error);
      res.status(401);
      console.log("Not authorized, token failed 1");
      throw new Error("Not authorized, token failed 1");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, token failed ");
  }
  
});

module.exports = { project };
