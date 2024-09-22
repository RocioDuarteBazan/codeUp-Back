import express from "express"
import eventController from "../controllers/eventController.js"

const eventRouter = express.Router()

eventRouter.get("/", eventController.getAll)
eventRouter.get("/:place", eventController.getByPlace)
eventRouter.post("/", eventController.createOne)
eventRouter.put("/:id", eventController.updateOne)
eventRouter.delete("/:id", eventController.deleteOne)

export default eventRouter