import { Schema, model, Types } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    genre: {
        type: String
    },

    //Array de referencias a documentos del modelo Evento
    events: [{
        type: Types.ObjectId,
        ref: 'event'
    }],
    
    role: {
        type: String,
        enum: ['admin', 'user', 'organizer'],
        default: 'user'
    }
})

const userModel = model("user", userSchema)

export default userModel