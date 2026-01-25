import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        emun: ["Pending","Success" ,"Failed" ],
        default: "Pending"
    },
})

export const Payment = mongoose.model("Payment", paymentSchema)