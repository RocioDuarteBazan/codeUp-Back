import userService from "../services/userService.js"
import CustomError from "../utils/customErrors.js"
import catched from "../utils/catched.js"
import httpResponse from "../utils/httpResponse.js"
import userDTO from "../DTO/userDTO.js"

const userCotroller = {
    async signUp(req, res) {
        const data = req.body
        const emailExist = await userService.getByEmail(data.email)
        if (emailExist) throw new CustomError("El email ya esta en uso", 409)
        const newUser = await userService.create(data)
        const userResponse = userDTO( newUser )
        httpResponse(res, 201, userResponse )
    },
    async login(req, res) {
        const data = req.body
        const emailExist = await userService.getByEmail(data.email)
        if (!emailExist) throw new CustomError("Email o contraseña son incorrectos", 401)
        const validPassword = userService.controlerPassword(data.password, emailExist.password)
        if (!validPassword) throw new CustomError("Email o contraseña son incorrectos", 401)
        const userResponse = userDTO( emailExist )
        httpResponse(res, 201, userResponse)
    }
}

export default {
    signUp: catched(userCotroller.signUp),
    login: catched(userCotroller.login)
} 