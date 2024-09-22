import eventModel from "../models/event.js";
import CustomError from "../utils/customErrors.js";
import validateOID from "../utils/validateObjecID.js";

const eventService = {
    async getAllEvent() {
            const events = await eventModel.find()
            return events
    },

    async getById(placeId){
        const validateID = validateOID(placeId)
        if(!validateID) throw new CustomError("No existe evento con ese Id", 400)
        return await eventModel.findById(placeId).populate({path: "place", select: "name address photo -_id"})
    },

    async getByPlace(placeId){
        try {
            const validateID = validateOID(placeId)
            if(!validateID) throw new CustomError("Id invalido", 400)
            const places = await eventModel.find({ place : placeId})
            return places

        } catch (error) {
            throw new CustomError(error.message, 400);
        }
    },
    
    // async getOneEventByName(name) {
    //         const event = await eventModel.findOne({ nombre: name })
    //         return event
    // },

    async createOne(data) {
        const newEvent = await eventModel.create(data)
        return newEvent
    },

    async updateOne(id, data){
        const newEvent = await eventModel.findOneAndUpdate({ _id: id }, data, { new: true })
        return newEvent
    },

    async deleteOne(id){
        const event = await eventModel.findByIdAndDelete({ _id: id })
        return event
    },
    // async registerUserToEvent(eventId, userId, userAge) {
    //     const event = await eventModel.findById(eventId).populate('attendees')
    //     if (!event) {throw new Error('Evento no encontrado');}
    
    //     if (userAge < event.minimumAge) {throw new Error('No cumple con la edad mínima para registrarse en este evento');}
    
    //     if (event.attendees.length >= event.occupancy) {throw new Error('No hay cupos disponibles para este evento');}
    
    //     event.attendees.push(userId);
    //     await event.save();
        
    //     return event;
    // }

}

export default eventService