import placeModel from "../models/place.js";

const placeService = {
    async getAllPlace() {
        try {
            const places = await placeModel.find()
            return places
        } catch (error) {
            return []
        }
    },

    async getOnePlaceByName(name){
        try {
            const place = await placeModel.findOne( { nombre: name })
            return place
        } catch (error) {
            []
        }
    },

    async getOnePlaceByName(name) {
        try {
            const place = await placeModel.findOne({ nombre: name })
            return place
        } catch (error) {
            []
        }
    },

    async createOne(data) {
        try {
            const place = await this.getOnePlaceByName(data.name)
            if (place) throw new Error("El lugar ya esta registrado")
            const newPlace = await placeModel.create(data)
            return newPlace

        } catch (error) {
            return false
        }
    }
}

export default placeService