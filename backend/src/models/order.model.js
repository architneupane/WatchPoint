import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    amount:{
        typeof: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    deliveryCity: {
        typeof: String,
        required: true
    },
    deliveryAddress: {
        typeof: String,
        required: true
    },
    receiverName:{
        typeof: String,
        required: true
    },
    receiverContactNo:{
        typeof: Number,
        required: true
    }
} ,{ timestamps: true }
)

export const Order = mongoose.model("Order", orderSchema)