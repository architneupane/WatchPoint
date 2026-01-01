import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/ApiResponse.js"
import {Product} from '../models/productModel.js'

export const getAllProducts = asyncHandler( async(req,res)=>{
   const {category} = req.query

   const products = await Product.find({category});
   res.status(200).json(
    new ApiResponse(200, products, "All Products")
   )
})
