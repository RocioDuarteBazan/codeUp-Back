import eventModel from "../models/event.js";
import CustomError from "../utils/customErrors.js";

const eventService = {
    async getAllEvent() {
            const events = await eventModel.find()
            return events
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