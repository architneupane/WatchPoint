import { Router } from "express"
import { createOrder, deliveryDetails, getOrderId, verifyEsewaPayment } from "../controllers/payment.controller.js"
import authMiddleware from '../middlewares/authMiddleware.js'


const router = Router()

router.route('/verify').post(verifyEsewaPayment)
router.route('/createorder').post(authMiddleware, createOrder)
router.route('/deliverydetails').post(deliveryDetails)
router.route('/getorderid').get(authMiddleware, getOrderId)

export default router
