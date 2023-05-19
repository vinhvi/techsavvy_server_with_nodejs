const Supplier = require("../models/supplierModel");

//Thêm nhà cung cấp
exports.addSupplier = async (req, res, next) => {
  try {
    const { name, email, address, phone } = req.body;
    const supplier = await Supplier.create({ name, email, address, phone });
    res.status(200).json(supplier);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

//Cập nhật supplier
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, address, phone } = req.body;
    const supplierBefor = await Supplier.findByPk(id);
    if (!supplierBefor) {
      res.status(201).json("The supplier is not included in database");
      return;
    }
    await supplierBefor.update({
      name: name,
      email: email,
      address: address,
      phone: phone,
    });
    const supplierAfter = await Supplier.findByPk(id);
    res.status(200).json(supplierAfter);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Tìm nhà cung cấp theo phone
exports.getByPhone = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;

    const supplier = await Supplier.findAll({
      where: {
        phone: phoneNumber,
      },
    });
    if (supplier) {
      res.status(200).json(supplier);
    }
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Lấy tất cả các nhà cung cấp
exports.getAll = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Lấy nhà cung cấp theo id
exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      res.status(201).json("The supplier is not included in database");
      return;
    }
    res.status(200).json(supplier);
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};

// Xóa nhà cung cấp
exports.deleteSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      res.status(201).json("The supplier is not included in database");
      return;
    }
    await supplier.destroy();
    res.status(200).json("success");
  } catch (error) {
    next(error);
    res.status(500).json("Error cmnr !!");
  }
};
