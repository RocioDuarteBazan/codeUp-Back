import Joi from "joi"

const eventSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            'string.base': 'El nombre debe ser un texto.',
            'string.empty': 'El nombre es un campo obligatorio.',
            'any.required': 'El nombre es un campo obligatorio.'
        }),
    date: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha debe ser válida.',
            'any.required': 'La fecha es un campo obligatorio.'
        }),
    place: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base': 'El lugar debe ser un ObjectId válido.',
            'any.required': 'El lugar es un campo obligatorio.'
        }),
    photo: Joi.string()
        .uri()
        .optional()
        .messages({
            'string.uri': 'La foto debe ser una URL válida.'
        }),
    description: Joi.string()
        .required()
        .messages({
            'string.base': 'La descripción debe ser un texto.',
            'string.empty': 'La descripción es un campo obligatorio.',
            'any.required': 'La descripción es un campo obligatorio.'
        }),
    assistants: Joi.array()
        .items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/))
        .optional()
        .messages({
            'string.pattern.base': 'Cada asistente debe ser un ObjectId válido.'
        }),
    minimumAge: Joi.number()
        .integer()
        .min(1)
        .max(80)
        .required()
        .messages({
            'number.base': 'La edad mínima debe ser un número.',
            'number.integer': 'La edad mínima debe ser un número entero.',
            'number.min': 'La edad mínima debe ser al menos 1.',
            'number.max': 'La edad mínima no puede ser mayor a 80.',
            'any.required': 'La edad mínima es un campo obligatorio.'
        }),
    organizer: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base': 'El organizador debe ser un ObjectId válido.',
            'any.required': 'El organizador es un campo obligatorio.'
        })
})

export default eventSchema