import Joi from "joi"

const userSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            'string.base': 'El nombre debe ser un texto.',
            'string.empty': 'El nombre es un campo obligatorio.',
            'any.required': 'El nombre es un campo obligatorio.'
        }),
    lastname: Joi.string()
        .required()
        .messages({
            'string.base': 'El apellido debe ser un texto.',
            'string.empty': 'El apellido es un campo obligatorio.',
            'any.required': 'El apellido es un campo obligatorio.'
        }),
    photo: Joi.string()
        .uri()
        .optional()
        .messages({
            'string.uri': 'La foto debe ser una URL válida.'
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'El correo electrónico debe ser válido.',
            'string.empty': 'El correo electrónico es un campo obligatorio.',
            'any.required': 'El correo electrónico es un campo obligatorio.'
        }),
    password: Joi.string()
        .required()
        .messages({
            'string.base': 'La contraseña debe ser un texto.',
            'string.empty': 'La contraseña es un campo obligatorio.',
            'any.required': 'La contraseña es un campo obligatorio.'
        }),
    age: Joi.number()
        .integer()
        .min(1)
        .required()
        .messages({
            'number.base': 'La edad debe ser un número.',
            'number.integer': 'La edad debe ser un número entero.',
            'number.min': 'La edad debe ser al menos 1.',
            'any.required': 'La edad es un campo obligatorio.'
        }),
    genre: Joi.string()
        .optional()
        .messages({
            'string.base': 'El género debe ser un texto.'
        }),
    events: Joi.array()
        .items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/))
        .optional()
        .messages({
            'string.pattern.base': 'Cada evento debe ser un ObjectId válido.'
        }),
    role: Joi.string()
        .valid('admin', 'user', 'organizer')
        .default('user')
        .messages({
            'any.only': 'El rol debe ser uno de los siguientes: admin, user, organizer.'
        })

})

export default userSchema