import { Order } from "../models/order.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import crypto from "crypto";

export const verifyEsewaPayment = asyncHandler(async (req, res) => {
  const { amount } = req.body;
  console.log(amount);

  const tax_amount = "0";
  const total_amount = amount.toString();
  console.log(typeof total_amount);
  const transaction_uuid = `txn-${Date.now()}`;
  const product_code = process.env.ESEWA_PRODUCT_CODE;
  const secret = process.env.ESEWA_SECRET_KEY;

  const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
  console.log(secret);
  console.log(product_code);
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(message);

  const signature = hmac.digest("base64");

  console.log(
    tax_amount,
    total_amount,
    transaction_uuid,
    product_code,
    signature
  );
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { tax_amount, total_amount, transaction_uuid, product_code, signature },
        "done"
      )
    );
});

export const createOrder = asyncHandler(async (req, res) => {
  const { amount } = req.body;

  const order = await Order.create({
    user: req.user.id,
    amount,
  });

  if (order) {
    res.status(200).json(new ApiResponse(200, order, "Order is Created"));
  } else {
    res.status(500).json(new ApiError(500, "server error"));
  }
});

export const getOrderId = asyncHandler(async (req, res) => {
  const orderId = await Order.findOne({ user: req.user.id });

  if (orderId) {
    res.status(200).json(new ApiResponse(200, orderId, "Order Id"));
  } else {
    res.status(200).json(new ApiError(500, "server error"));
  }
});

export const deliveryDetails = asyncHandler(async (req, res) => {
  const { deliveryData, orderId } = req.body;
  const { fullName, deliveryAddress, contactNo, deliveryCity } = deliveryData;

  const order = await Order.findByIdAndUpdate(
    orderId,
    {
      $set: {
        deliveryCity,
        receiverName: fullName,
        deliveryAddress: deliveryAddress,
        receiverContactNo: contactNo,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!order) {
    throw new ApiError(400, "server error");
  }

  res.status(200).json(new ApiResponse(200, order, "Order Placed Successfully"));
});
