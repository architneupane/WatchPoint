import { Router } from "express"
import { verifyEsewaPayment } from "../controllers/payment.controller.js"


const router = Router()

router.route('/verify').post(verifyEsewaPayment)

export default router
