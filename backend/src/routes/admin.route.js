import { Router } from "express";
import { adminLogin, getInsights } from "../controllers/admin.controller.js";
import {  authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router()

router.route('/admindashboard').post( authMiddleware, getInsights)
router.route('/admin-login').post(adminLogin)

export default router
