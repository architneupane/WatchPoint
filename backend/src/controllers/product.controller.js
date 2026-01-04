import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Product } from "../models/productModel.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const { productCategory } = req.query;

  const products = await Product.find({ productCategory });
  res.status(200).json(new ApiResponse(200, products, "All Products"));
});

export const addProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    productDescription,
    productPrice,
    productImage,
    productCategory,
  } = req.body;

  if (
    [
      productName,
      productCategory,
      productDescription,
      productImage,
      productPrice,
    ].some((field) => field?.trim() == "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const productDetails = {
    productName,
    productDescription,
    productPrice,
    productImage,
    productCategory,
  };
  const product = await Product.create(productDetails);

  if (product) {
    res
      .status(201)
      .json(new ApiResponse(201, product, "Product added successfully"));
  }
});

export const removeProduct = asyncHandler(async (req, res) => {
  const { productNameForRemove } = req.body;

  const validProductName = await Product.findOne({
    productName: productNameForRemove,
  });

  if (!validProductName) {
    throw new ApiError(404, "Invalid Prosuct Name");
  }

  const product = await Product.findOneAndDelete({
    productName: productNameForRemove,
  });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, product, "Product deleted successfully"));
});
