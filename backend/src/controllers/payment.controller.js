import { Order } from "../models/order.model.js";
import { Payment } from "../models/payment.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import crypto from "crypto";

export const verifyEsewaPayment = asyncHandler(async (req, res) => {
  const { deliveryData, amount, orderId } = req.body;
  const { fullName, deliveryAddress, contactNo, deliveryCity } = deliveryData;

  if (!amount || amount <= 0) {
    throw new ApiError(400, "Invalid amount");
  }
  if (!orderId) {
    throw new ApiError(400, "Order ID is required");
  }

  const tax_amount = "0";
  const total_amount = String(Number(amount));
  const transaction_uuid = `txn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const product_code = process.env.ESEWA_PRODUCT_CODE;
  const secret = process.env.ESEWA_SECRET_KEY;

  if (!secret || !product_code) {
    throw new ApiError(500, "eSewa credentials not configured");
  }

  if (orderId) {
    await Order.findByIdAndUpdate(
      orderId,
      {
        $set: {
          deliveryCity,
          receiverName: fullName,
          deliveryAddress: deliveryAddress,
          receiverContactNo: contactNo,
        },
      },
      { new: true },
    );
  }

  const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

  const signature = crypto
    .createHmac("sha256", secret)
    .update(message)
    .digest("base64");

  res.status(200).json(
    new ApiResponse(
      200,
      {
        tax_amount,
        total_amount,
        transaction_uuid,
        product_code,
        signature,
      },
      "Payment verification data generated successfully",
    ),
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
  const recentOrder = await Order.findOne({ user: req.user.id })
    .sort({ createdAt: -1 })
    .select("_id");

  if (!recentOrder) {
    throw new ApiError(404, "No orders found for this user");
  }

  res.status(200).json(new ApiResponse(200, recentOrder._id, "Order id"));
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
    },
  );

  if (!order) {
    throw new ApiError(400, "server error");
  }

  res
    .status(200)
    .json(new ApiResponse(200, order, "Order Placed Successfully"));
});

export const verifyEsewaPaymentResponse = asyncHandler(async (req, res) => {
  const { transaction_uuid, total_amount, orderId } = req.body;

  if (!transaction_uuid || !total_amount) {
    throw new ApiError(400, "Missing transaction_uuid or total_amount");
  }
  try {
    const order = await Order.findOne({ _id: orderId });

    if (!order) {
      throw new ApiError(404, "Order not found for this transaction");
    }

    const payment = await Payment.create(
      {
        transaction_uuid,
        totalAmount: total_amount,
        orderId: order._id,
        paymentStatus: "Success",
      }
    );

    res
      .status(200)
      .json(new ApiResponse(200, payment, "Payment verified successfully"));
  } catch (error) {
    throw new ApiError(400, error.message || "Payment verification failed");
  }
});
