import express from "express"
import userController from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/sign-up", userController.signUp) 
userRouter.post("/login", userController.login) 

export default userRouter