import { Router } from "express";
import {addProduct, getAllProducts, removeProduct} from '../controllers/product.controller.js'
import { adminAuth } from "../middlewares/authMiddleware.js";

const router = Router()


router.route('/allproducts').get( getAllProducts)
router.route('/add-product').post(adminAuth, addProduct)
router.route('/remove-product').post(adminAuth, removeProduct)

export default router