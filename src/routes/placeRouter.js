import express from "express"
import placeController from "../controllers/placeController.js"
import placeSchema from "../validator/schemas/placeSchema.js"
import validator from "../validator/validator.js"

const placeRouter = express.Router()

placeRouter.get("/", placeController.getAll)
//placeRouter.get("/:event", placeController.getByEvent)
placeRouter.post("/", validator(placeSchema), placeController.createOne)
placeRouter.put("/:id", placeController.updateOne)
placeRouter.delete("/:id", placeController.deleteOne)

export default placeRouter