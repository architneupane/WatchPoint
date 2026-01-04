import { Router } from "express";
import {addProduct, getAllProducts, removeProduct} from '../controllers/product.controller.js'

const router = Router()


router.route('/allproducts').get(getAllProducts)
router.route('/addproduct').post(addProduct)
router.route('/removeproduct').post(removeProduct)

export default router