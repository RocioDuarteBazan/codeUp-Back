import passport from "passport"
import dotenv from "dotenv"
dotenv.config()

import { Strategy, ExtractJwt } from "passport-jwt"
import userService from "../../services/userService.js"

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const fn = async (payload, done) =>{
    try {
        const user = await userService.getByEmail(payload.email)
        if(!user) return done (null, false);
        return done(null, user)
    } catch (error) {
        return done(error, false);
    }
}

export default passport.use(new Strategy(options, fn))