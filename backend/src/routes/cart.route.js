import { Router } from "express";
import { addToCart, getCartItems, removeCartItem } from "../controllers/cart.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router()


router.route('/addtocart').post(authMiddleware, addToCart)
router.route('/getcartitems').get(authMiddleware, getCartItems)
router.route('/removecartitem').post(authMiddleware, removeCartItem)

export default router