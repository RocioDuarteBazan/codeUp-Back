import eventModel from "../models/event.js";
import CustomError from "../utils/customErrors.js";
import validateOID from "../utils/validateObjecID.js";

const eventService = {
    async getAllEvent() {
            const events = await eventModel.find()
            return events
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
    }
}

export default eventService