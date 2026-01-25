import { Order } from "../models/order.model.js";
import { Product } from "../models/productModel.js";
import { User } from "../models/userModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME) {
    throw new ApiError(401, "Invalid Username");
  }

  const isAdminPassowrdValid = await bcrypt.compare(
    password,
    process.env.ADMIN_PASSWORD_HASH,
  );

  if (!isAdminPassowrdValid) {
    throw new ApiError(401, "Invalid Password");
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Admin Login Successful"));
});

export const getInsights = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalProducts = await Product.countDocuments();
  const totalOrders = await Order.countDocuments();

  const data = { totalOrders, totalProducts, totalUsers };

  if (!data) {
    throw new ApiError(404, "Data Not Found");
  }

  return res.status(200).json(new ApiResponse(200, data, "Insights"));
});
