import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/ApiResponse.js"
import {Product} from '../models/productModel.js'

export const getAllProducts = asyncHandler( async(req,res)=>{
   const product = await Product.find();
   res.status(200).json(
    new ApiResponse(200, product, "All Products")
   )
})