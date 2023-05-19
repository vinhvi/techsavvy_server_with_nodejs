const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const orderDetailRoute = require("./routes/orderDetailRoute");
const supplierRouter = require("./routes/supplierRoute");

app.use(express.json());
const port = process.env.APP_PORT;
// Sử dụng cooki để lưu token
app.use(cookieParser());

// Sử dụng route '/users' cho các request liên quan đến user
app.use("/api/users", userRoute);

// Sử dụng route '/products' cho các request liên quan đến products
app.use("/api/products", productRoute);

// Sử dụng route '/orders' cho các request liên quan đến orders
app.use("/api/orders", orderRoute);

// Sử dụng route '/orderDetails' cho các request liên quan đến orders
app.use("/api/orderDetails", orderDetailRoute);

// Sử dụng route '/supplier' cho các request liên quan đến supplier
app.use("/api/supplier", supplierRouter);
// Khởi động server
app.listen(port, () => {
  console.log("Server is running on port " + port + " !!");
});
