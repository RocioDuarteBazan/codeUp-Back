import Joi from 'joi';

const updateUserSchema = Joi.object({
    name: Joi.string().optional(),
    lastname: Joi.string().optional(),
    photo: Joi.string().optional(),
    email: Joi.string().email().optional(),
    age: Joi.number().optional(),
    genre: Joi.string().optional(),
    // Excluyo el campo "Rol" para evitar que lo actualicen
}).options({ allowUnknown: false }); // No permitito campos no definidos en el esquema

export default updateUserSchema