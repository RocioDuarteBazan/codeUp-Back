import express from "express"
import eventController from "../controllers/eventController.js"
import eventSchema from "../validator/schemas/eventSchema.js"
import validator from "../validator/validator.js"

const eventRouter = express.Router()

eventRouter.get("/", eventController.getAll)
eventRouter.get("/:place", eventController.getByPlace)
eventRouter.get("/one/:id", eventController.getById)
eventRouter.post("/", validator(eventSchema), eventController.createOne)
eventRouter.put("/:id", eventController.updateOne)
eventRouter.delete("/:id", eventController.deleteOne)
// eventRouter.post('/:eventId/register',eventController.register);


export default eventRouter