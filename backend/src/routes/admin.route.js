import { Router } from "express";
import { adminLogin, getInsights } from "../controllers/admin.controller.js";

const router = Router()

router.route('/get-insights').get(getInsights)
router.route('/admin-login').post(adminLogin)

export default router
