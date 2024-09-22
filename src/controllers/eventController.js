import eventService from "../services/eventService.js";
import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";
import CustomError from "../utils/customErrors.js";
import eventDTO from "../DTO/eventDTO.js";
import eventModel from "../models/event.js";


const eventCotroller = {
    async getAll(req, res) {
        const events = await eventService.getAllEvent()
        httpResponse(res, 200, events)
    },

    async getByPlace(req, res){
        const placeId = req.params.place
        const event = await eventService.getByPlace(placeId)
        httpResponse(res, 200, event)
    },

    async createOne(req, res) {
        const newEvent = await eventService.createOne(req.body)
        if (!newEvent) throw new CustomError("No se pudo crear evento", 401)
        httpResponse(res, 200, newEvent)
    },

    async updateOne(req, res) {
        const newEvent = await eventService.updateOne(req.params.id, req.body)
        if (!newEvent) throw new CustomError("No se pudo actualizar el evento")
        httpResponse(res, 200, newEvent)
    },

    async deleteOne(req, res) {
        const event = await eventService.deleteOne(req.params.id) 
        if (!event) throw new CustomError("No se pudo actualizar eliminar")
        httpResponse(res, 200, "Evento eliminado")
    }

}

export default {
    getAll: catched(eventCotroller.getAll),
    createOne: catched(eventCotroller.createOne),
    updateOne: catched(eventCotroller.updateOne),
    deleteOne: catched(eventCotroller.deleteOne),
    getByPlace: catched(eventCotroller.getByPlace)
}
