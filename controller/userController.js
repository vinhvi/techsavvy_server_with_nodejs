const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../config/generateToken");
// Tạo user mới
exports.createUser = async (req, res, next) => {
  try {
    const { name, image, sex, birthDay, address, phone, email, access } =
      req.body;

    // Kiểm tra email đã có chưa
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Email already exists");
    }

    // Kiểm tra email đã có chưa
    const phoneExits = await User.findOne({ phone });
    if (phoneExits) {
      res.status(400);
      throw new Error("Phone number already exists");
    }

    //Chuyển password về bcrypt
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    // Lưu user vào database
    const user = await User.create({
      name,
      image,
      sex,
      birthDay,
      address,
      phone,
      email,
      access,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Lấy thông tin user theo ID
exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Cập nhật thông tin user
exports.updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, image, sex, birthDay, address, phone, email } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    user.name = name;
    user.image = image;
    user.sex = sex;
    user.birthDay = birthDay;
    user.address = address;
    user.phone = phone;
    user.email = email;
    await user.save();
    // Bỏ access và password sau khi update
    const userAfterUpdate = user.get({ plain: true });
    delete userAfterUpdate.password;
    delete userAfterUpdate.access;

    res.status(200).json(userAfterUpdate);
  } catch (error) {
    next(error);
  }
};

//Lấy tất cả user
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Đăng nhập
exports.login = async (req, res, next) => {
  try {
    const { email, phone, password } = req.body;
    //check email và phone
    const user = await User.findOne({ $or: [{ email }, { phone }] });
    //Check password
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (user && isPasswordCorrect) {
      //Tạo token
      const token = await generateToken(user.id);
      //Lưu token vào cookie
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({
          id: user.id,
          name: user.name,
          image: user.image,
          email: user.email,
          sex: user.sex,
          phone: user.phone,
          birth: user.birth,
          access: user.access,
          token,
        });
      console.log(user.name + " đăng nhập thành công !!");
    } else {
      console.log("Sai Tai khoan");
      res.status(401);
      throw new Error("Wrong email, phone or password");
    }
  } catch (error) {
    next(error);
  }
};
