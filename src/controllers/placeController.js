import placeService from "../services/placeService.js";

export const placeController = {
    async getAll(req, res) {
        try {
            const places = await placeService.getAllPlace()
            res.status(200).json({ places })
        } catch (error) {
            console.log(error);
            res.status(400).json({ error })

        }

    },

    async createOne(req, res){
        try {
            const newPlace = placeService.createOne( req.body )
            if ( !newPlace ) throw new Error( "No se puedo crear el evento" )
            res.status(200).json({ status:true, newPlace })

        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default placeController