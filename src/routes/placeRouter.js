import express from "express"
import placeController from "../controllers/placeController.js"

const placeRouter = express.Router()

placeRouter.get("/", placeController.getAll)
placeRouter.post("/", placeController.createOne)

export default placeRouter