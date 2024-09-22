import express from "express"
import userController from "../controllers/userController.js"
import userSchema from "../validator/schemas/userSchema.js"
import loginSchema from "../validator/schemas/loginSchema.js"
import validator from "../validator/validator.js"
import passport from "../middlewares/passport/passport.js"


const userRouter = express.Router()

userRouter.post("/sign-up",validator(userSchema), userController.signUp) 
userRouter.post("/login",validator(loginSchema), userController.login)
userRouter.post("/login/token", passport.authenticate("jwt", { session: false }), userController.loginWithToken)  

export default userRouter