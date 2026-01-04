import { Order } from "../models/order.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const verifyEsewaPayment = asyncHandler(async (req, res) => {
  const { amt, refId, oid } = req.body;

  try {
    const res = await axios.post(
      "https://uat.esewa.com.np/epay/transrec",
      null,
      {
        params: {
          amt: amt,
          rif: refId,
          pid: oid,
          scd: "EPAYTEST",
        },
      }
    );

    if (res.data.include("Success")) {
      res
        .status(200)
        .json(new ApiResponse(200, "Payment verified Successfully"));
    } else {
      res.status(400).json(new ApiResponse(400, "Payment verification failed"));
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(500, "Server Error"));
  }
});

export const createOrder = asyncHandler(async (req, res) => {
  const { amount } = req.body;

  const order = await Order.create({
    user: req.user.id,
    amount,
  });
  console.log(order);

  if (order) {
    res.status(200).json(new ApiResponse(200, order, "Order is Created"));
  } else {
    res.status(500).json(new ApiError(500, "server error"));
  }
});

export const getOrderId = asyncHandler(async (req, res) => {
  const orderId = await Order.findOne({user: req.user.id})
  console.log(orderId)

  if(orderId){
    res.status(200).json(
        new ApiResponse(200, orderId, "Order Id")
    )

  }else{
    res.status(200).json(
        new ApiError(500, "server error")
    )
  }
});
