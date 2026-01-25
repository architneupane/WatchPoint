import { Router } from "express"
import { createOrder, deliveryDetails, getOrderId, verifyEsewaPayment, verifyEsewaPaymentResponse } from "../controllers/payment.controller.js"
import {userAuth} from '../middlewares/authMiddleware.js'


const router = Router()

router.route('/verify').post(userAuth, verifyEsewaPayment)
router.route('/verify-response').post(userAuth, verifyEsewaPaymentResponse)
router.route('/create-order').post(userAuth, createOrder)
router.route('/delivery-details').post(userAuth, deliveryDetails)
router.route('/get-orderid').get(userAuth, getOrderId)

export default router
