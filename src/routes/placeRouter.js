import express from "express"
import placeController from "../controllers/placeController.js"

const placeRouter = express.Router()

placeRouter.get("/", placeController.getAll)
//placeRouter.get("/:event", placeController.getByEvent)
placeRouter.post("/", placeController.createOne)
placeRouter.put("/:id", placeController.updateOne)
placeRouter.delete("/:id", placeController.deleteOne)

export default placeRouter