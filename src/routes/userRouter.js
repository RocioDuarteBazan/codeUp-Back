import express from "express"
import userController from "../controllers/userController.js"
import userSchema from "../validator/schemas/userSchema.js"
import loginSchema from "../validator/schemas/loginSchema.js"
import validator from "../validator/validator.js"


const userRouter = express.Router()

userRouter.post("/sign-up",validator(userSchema), userController.signUp) 
userRouter.post("/login",validator(loginSchema), userController.login) 

export default userRouter