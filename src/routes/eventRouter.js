import express from "express"
import placeController from "../controllers/eventController.js"

const eventRouter = express.Router()

eventRouter.get("/", placeController.getAll)
eventRouter.post("/", placeController.createOne)

export default eventRouter