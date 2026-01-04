import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    amount:{
        typeof: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    deliveryCity: {
        typeof: String,
    },
    deliveryAddress: {
        typeof: String,
    },
    receiverName:{
        typeof: String,
    },
    receiverContactNo:{
        typeof: Number,
    }
} ,{ timestamps: true }
)

export const Order = mongoose.model("Order", orderSchema)