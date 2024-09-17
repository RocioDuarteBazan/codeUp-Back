import eventModel from "../models/event.js";
import CustomError from "../utils/customErrors.js";

const eventService = {
    async getAllEvent() {
        try {
            const events = await eventModel.find()
            return events
        } catch (error) {
            CustomError("Error en búsqueda", 400)
        }
    },

    async getOneEventByName(name) {
        try {
            const event = await eventModel.findOne({ nombre: name })
            return event
        } catch (error) {
            CustomError("Evento no encontrado", 401)
        }
    },

    async createOne(data) {
        try {
            const event = await this.getOneEventByName(data.name)
            if (event) throw new CustomError("El evento ya esta creado", 401)
            const newEvent = await eventModel.create(data)
            return newEvent

        } catch (error) {
            new CustomError("No se puede crear evento", 400)
        }
    }
}

export default eventService