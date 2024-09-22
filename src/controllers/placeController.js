import placeService from "../services/placeService.js";
import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";
import CustomError from "../utils/customErrors.js";


const placeController = {
    async getAll(req, res) {
        const places = await placeService.getAllPlace()
        httpResponse(res, 200, places)
    },


    async createOne(req, res) {
        const newPlace = await placeService.createOne(req.body)
        if ( !newPlace ) throw new CustomError( "No se puedo crear el evento", 400 )
        httpResponse(res, 200, newPlace)
    },
    async updateOne(req, res) {
        const newPlace = await placeService.updateOne(req.params.id, req.body)
        if (!newPlace) throw new CustomError("No se pudo actualizar el lugar")
        httpResponse(res, 200, newPlace)
    },

    async deleteOne(req, res) {
        const place = await placeService.deleteOne(req.params.id) 
        if (!place) throw new CustomError("No se pudo actualizar eliminar")
        httpResponse(res, 200, "Lugar eliminado")
    }
}

export default {
    getAll: catched(placeController.getAll),
    createOne: catched(placeController.createOne),
    updateOne: catched(placeController.updateOne),
    deleteOne: catched(placeController.deleteOne),
    getByEvent: catched(placeController.getByEvent)    
}
