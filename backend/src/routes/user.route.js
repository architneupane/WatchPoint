import {Router} from "express"
import { userAuth} from "../middlewares/authMiddleware.js"
import passport from "passport"
import { loginUser, loginWithGoogle, logoutUser, registerUser, verifyUser } from "../controllers/user.controller.js"



const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post( loginUser)
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)
router.get('/google/callback',
    passport.authenticate('google', { 
        failureRedirect: "/login/failed",
        session: false }),
    loginWithGoogle
)
router.route('/logout').post(logoutUser)
router.route('/verify').get(userAuth, verifyUser)

export default router