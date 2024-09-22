import { Schema, model, Types } from "mongoose"

const placeSchema = new Schema({
    // Nombre del lugar, campo obligatorio
    name: {
        type: String,
        required: true,
        unique: true 
    },

    // Dirección del lugar, campo obligatorio
    address: {
        type: String,
        required: true
    },

    // URL o ruta de la foto del lugar, campo opcional
    photo: {
        type: String
    },

    // // Array de referencias a documentos del modelo Evento
    events: [{
        type: Types.ObjectId,
        ref: 'event'
    }],

    // Capacidad máxima del lugar, campo obligatorio
    occupancy: {
        type: Number,
        required: true
    }

})

const placeModel = model("place", placeSchema)

export default placeModel