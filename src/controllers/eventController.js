import eventService from "../services/eventService.js";
import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";
import CustomError from "../utils/customErrors.js";



const eventCotroller = {
    async getAll(req, res) {
        const events = await eventService.getAllEvent()
        httpResponse(res, 200, events)
    },

    async getById(req, res) {
        const placeId = req.params.id
        const place = await eventService.getById(placeId)
        httpResponse(res, 200, place)
    },

    async getByPlace(req, res) {
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
    },

    // async register(req, res) {
    //     const { eventId } = req.params; // ID del evento de la URL
    //     const userId = req.user._id; // ID del usuario desde la sesión o token

    //     try {
    //         // Encuentra al usuario en la base de datos usando su ID
    //         const user = await userModel.findById(userId);

    //         if (!user) {
    //             return res.status(404).json({ message: 'Usuario no encontrado' });
    //         }

    //         const userAge = user.age; // Obtiene la edad del usuario

    //         const updatedEvent = await eventService.registerUserToEvent(eventId, userId, userAge);
    //         httpResponse(res, 200, updatedEvent);
    //     } catch (error) {
    //         throw new CustomError("No se pudo registrar");
    //     }
    // }

}

export default {
    getAll: catched(eventCotroller.getAll),
    createOne: catched(eventCotroller.createOne),
    updateOne: catched(eventCotroller.updateOne),
    deleteOne: catched(eventCotroller.deleteOne),
    getByPlace: catched(eventCotroller.getByPlace),
    getById: catched(eventCotroller.getById),
    register: catched(eventCotroller.register)
}
