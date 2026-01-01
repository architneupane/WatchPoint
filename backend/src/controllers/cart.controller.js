import { Cart } from "../models/cart.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from '../utils/ApiError.js'
import asyncHandler from "../utils/asyncHandler.js";

export const addToCart = asyncHandler( async(req,res) => {
   const {productId, quantity} = req.body

   try{ const cart = await Cart.create({
      user: req.user.id,
      product: productId,
      quantity
   })
   res.status(201).json(
    new ApiResponse(201, cart, "Product Added to Cart")
   )
   } catch(err){
    console.error('Add to cart error:', err.message);
   }
})

export const getCartItems = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find({ user: req.user.id }).populate("product");

    console.log(cartItems)
  if (cartItems) {
    res.status(200).json(
      new ApiResponse(200, cartItems, "Cart Items")
    );
  } else {
    throw new ApiError(500, "Server error");
  }
});
