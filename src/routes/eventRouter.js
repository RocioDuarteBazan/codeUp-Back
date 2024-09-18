import express from "express"
import eventController from "../controllers/eventController.js"

const eventRouter = express.Router()

eventRouter.get("/", eventController.getAll)
eventRouter.post("/", eventController.createOne)
eventRouter.put("/", eventController.updateOne)
eventRouter.delete("/", eventController.deleteOne)

export default eventRouter