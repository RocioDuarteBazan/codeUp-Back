import express from "express"
import eventRouter from "./eventRouter.js"
import placeRouter from "./placeRouter.js"
import userRouter from "./userRouter.js"

const indexRouter = express.Router()

indexRouter.use("/user", userRouter)
indexRouter.use("/event", eventRouter)
indexRouter.use("/place", placeRouter)

export default indexRouter