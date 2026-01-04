import { Router } from "express"
import { createOrder, getOrderId, verifyEsewaPayment } from "../controllers/payment.controller.js"
import authMiddleware from '../middlewares/authMiddleware.js'


const router = Router()

router.route('/verify').post(verifyEsewaPayment)
router.route('/createorder').post(authMiddleware, createOrder)
router.route('/getorderid').get(authMiddleware, getOrderId)

export default router
