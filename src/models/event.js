import { Schema, model } from "mongoose"

const eventSchema = new Schema({
  // Nombre del evento, campo obligatorio
  name: {
    type: String,
    required: true,
    unique: true
  },
  // Fecha del evento, campo obligatorio
  date: {
    type: Date,
    required: true
  },
  // Referencia obligatoria a un documento del modelo "Place"
  place: {
    type: String,
    required: true
    //type: mongoose.Schema.Types.ObjectId, (VER EL WORKSHOP DE RELACIONES)
    //ref: 'Place', 
    //required: true 
  },
  // URL o ruta de la foto del evento, campo opcional
  photo: {
    type: String
  },
  // Descripción del evento, campo obligatorio
  description: {
    type: String,
    required: true
  },
  // Edad mínima requerida para asistir, campo obligatorio
  minimumAge: {
    type: Number,
    required: true
  },

})

const eventModel = model("event", eventSchema)

export default eventModel