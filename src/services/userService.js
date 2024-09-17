import userModel from "../models/user.js"
import bcrypt from 'bcrypt'


const userService= {

    async getByEmail( email ) {
        return await userModel.findOne({ email: email })
    },

    async create (data) {
        const passwordHash = bcrypt.hashSync(data.password || "", 10)
        data.password = passwordHash
        return await userModel.create(data)
    },

    controlerPassword( password, passwordHash){
        return bcrypt.compareSync(password || "", passwordHash)
    }
}

export default userService