import express from "express"
import userController from "../controllers/userController.js"
import userSchema from "../validator/schemas/userSchema.js"
import loginSchema from "../validator/schemas/loginSchema.js"
import validator from "../validator/validator.js"
import passport from "../middlewares/passport/passport.js"
import updateUserSchema from "../validator/schemas/userUpdate.js"


const userRouter = express.Router()

userRouter.post("/sign-up",validator(userSchema), userController.signUp) 
userRouter.post("/login",validator(loginSchema), userController.login)
userRouter.post("/login/token", passport.authenticate("jwt", { session: false }), userController.loginWithToken)
userRouter.put("/update", validator(updateUserSchema), passport.authenticate("jwt", { session: false }), userController.updateUser); // Ruta para actualizar los datos del usuario
userRouter.put("/update-password", passport.authenticate("jwt", { session: false }), userController.updatePassword); // Ruta para actualizar la contraseña


export default userRouter