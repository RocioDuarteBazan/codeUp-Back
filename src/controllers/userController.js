import userService from "../services/userService.js"
import CustomError from "../utils/customErrors.js"
import catched from "../utils/catched.js"
import httpResponse from "../utils/httpResponse.js"
import userDTO from "../DTO/userDTO.js"

import jwt from "jsonwebtoken"

const userCotroller = {
    async signUp(req, res) {
        const data = req.body
        
        const emailExist = await userService.getByEmail(data.email)
        if (emailExist) {
            throw new CustomError("El email ya esta en uso", 409)
        }

        const newUser = await userService.create(data)
        const token = jwt.sign( { email: newUser.email }, process.env.SECRET_KEY, { expiresIn: "1h" } )
        const userResponse = userDTO( newUser, token )
        httpResponse(res, 201, userResponse )
    },
    async login(req, res) {
        const data = req.body

        const emailExist = await userService.getByEmail(data.email)
        if (!emailExist) {
            throw new CustomError("Email o contraseña son incorrectos", 401)
        }

        const validPassword = userService.controlerPassword(data.password, emailExist.password)
        if (!validPassword) {
            throw new CustomError("Email o contraseña son incorrectos", 401)
        }

        const token = jwt.sign( { email: emailExist.email }, process.env.SECRET_KEY, { expiresIn: "1h" } )
        const userResponse = userDTO(emailExist, token )
        httpResponse(res, 201, userResponse)
    },

    async loginWithToken(req, res){
        const token = req.headers.authorization.split("")[1]
        const userResponse = userDTO(req.user, token )
        httpResponse(res, 201, userResponse)
    },

    async updateUser(req, res) {
        const userId = req.user._id; // Obtener ID del usuario autenticado
        const data = req.body;

        const updatedUser = await userService.updateById(userId, data);
        const token = jwt.sign({ email: updatedUser.email }, process.env.SECRET_KEY, { expiresIn: "1h" });
        const userResponse = userDTO(updatedUser, token);

        httpResponse(res, 200, userResponse);
    },

    // Método específico para cambiar la contraseña
    async updatePassword(req, res) {
        const userId = req.user._id;
        const { currentPassword, newPassword } = req.body;

        const user = await userService.getByEmail(req.user.email);

        const validPassword = userService.controlerPassword(currentPassword, user.password); // Verifico si la contraseña es válida
        if (!validPassword) {
            throw new CustomError("La contraseña actual es incorrecta", 401);
        }

        await userService.updatePassword(userId, newPassword);

        httpResponse(res, 200, { message: "Contraseña actualizada exitosamente" });
    },

}

export default {
    signUp: catched(userCotroller.signUp),
    login: catched(userCotroller.login),
    loginWithToken: catched(userCotroller.loginWithToken),
    updateUser: catched(userCotroller.updateUser),
    updatePassword: catched(userCotroller.updatePassword),
} 