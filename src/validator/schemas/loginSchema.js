import Joi from "joi"

const loginSchema = Joi.object({
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
})

export default loginSchema