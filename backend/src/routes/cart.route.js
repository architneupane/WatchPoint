import { Router } from "express";
import { addToCart, getCartItems, removeCartItem } from "../controllers/cart.controller.js";
import { userAuth} from "../middlewares/authMiddleware.js";

const router = Router()


router.route('/add-to-cart').post(userAuth, addToCart)
router.route('/get-cart-items').get(userAuth, getCartItems)
router.route('/remove-cart-item').post(userAuth, removeCartItem)

export default router