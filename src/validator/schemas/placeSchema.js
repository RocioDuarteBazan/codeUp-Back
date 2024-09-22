import Joi from "joi"

const placeSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            'string.base': 'El nombre debe ser un texto.',
            'string.empty': 'El nombre es un campo obligatorio.',
            'any.required': 'El nombre es un campo obligatorio.'
        }),
    address: Joi.string()
        .required()
        .messages({
            'string.base': 'La dirección debe ser un texto.',
            'string.empty': 'La dirección es un campo obligatorio.',
            'any.required': 'La dirección es un campo obligatorio.'
        }),
    photo: Joi.string()
        .uri()
        .optional()
        .messages({
            'string.uri': 'La foto debe ser una URL válida.'
        }),
    events: Joi.array()
        .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
        .messages({
            'string.pattern.base': 'Cada evento debe ser un ObjectId válido.'
        }),
    occupancy: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'La capacidad debe ser un número.',
            'number.integer': 'La capacidad debe ser un número entero.',
            'any.required': 'La capacidad es un campo obligatorio.'
        })
})

export default placeSchema