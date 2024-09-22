import placeModel from "../models/place.js";
import CustomError from "../utils/customErrors.js";

const placeService = {
    async getAllPlace() {
        const places = await placeModel.find()
        return places
    },
    

    // a,sync getOnePlaceByName(name) {
    //     const place = await placeModel.findOne({ nombre: name })
    //     return place
    // },

    async createOne(data) {
        try {
            const newPlace = await placeModel.create(data)
            return newPlace
        } catch (error) {
            throw new CustomError(error.message, 400);
        }
    },

    async updateOne(id, data){
        const newPlace = await placeModel.findOneAndUpdate({ _id: id }, data, { new: true })
        return newPlace
    },

    async deleteOne(id){
        const place = await placeModel.findByIdAndDelete({ _id: id })
        return place
    }
}

export default placeService