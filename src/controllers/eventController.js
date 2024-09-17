import eventService from "../services/eventService.js";
import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";
import CustomError from "../utils/customErrors.js";
import eventDTO from "../DTO/eventDTO.js";


export const eventCotroller = {
    async getAll(req, res) {
        const events = await eventService.getAllEvent()
        httpResponse(res, 200, events)
    },


    async createOne(req, res) {
        const newEvent = eventService.createOne(req.body)
        if (!newEvent) throw new CustomError("No se pudo crear evento", 401)
        const eventResponse = eventDTO( newEvent )
        httpResponse(res, 200, eventResponse)
    }
}

export default {
    getAll: catched(eventCotroller.getAll),
    createOne: catched(eventCotroller.createOne)
}
