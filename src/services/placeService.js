import placeModel from "../models/place.js";
import CustomError from "../utils/customErrors.js";

const placeService = {
    async getAllPlace() {
        const places = await placeModel.find()
        return places
    },

    // async getOnePlaceByName(name) {
    //     const place = await placeModel.findOne({ nombre: name })
    //     return place
    // },

    async createOne(data) {
        const newPlace = await placeModel.create(data)
        return newPlace
    }
}

export default placeService