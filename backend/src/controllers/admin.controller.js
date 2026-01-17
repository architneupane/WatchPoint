import { Order } from "../models/order.model.js";
import { Product } from "../models/productModel.js";
import { User } from "../models/userModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


export const adminLogin = asyncHandler( async(req,res)=>{
    const {username, password} = req.body

    const adminUsername = "adminHo"
    const adminPassword = "adminHo123"

    if(adminUsername !== username){
        throw new ApiError(401, "Invalid Username")
    }

    if(adminPassword !== password){
        throw new ApiError(401, "Invalid Password")
    }

    return res.status(200).json(
        new ApiResponse(200, "Login Successful")
    )
})

export const getInsights = asyncHandler( async(req,res)=>{
    const totalUsers = await User.countDocuments()
    const totalProducts = await Product.countDocuments()
    const totalOrders = await Order.countDocuments()

    const data = {totalOrders, totalProducts, totalUsers}

    if(totalOrders && totalProducts && totalUsers){
        return res.status(200).json(
            new ApiResponse(200, data, "Insights")
        )
    }
    
    throw new ApiError(500, "Server Error")
})