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
    }
}

export default {
    getAll: catched(placeController.getAll),
    createOne: catched(placeController.createOne)
}
