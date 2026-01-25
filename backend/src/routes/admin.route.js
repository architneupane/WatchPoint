import { Router } from "express";
import { adminLogin, getInsights } from "../controllers/admin.controller.js";
import {  adminAuth } from "../middlewares/authMiddleware.js";

const router = Router()

router.route('/get-insights').get( adminAuth, getInsights)
router.route('/admin-login').post(adminLogin)

export default router
