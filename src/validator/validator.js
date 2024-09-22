const validator = (schema) => {
    return function (req, res, next) {
        const validate = schema.validate(req.body, { abortEarly: false })

        if (validate.error) {
            return res.json({ success: false, response: validate.error.details, erro: true })
        }

        next()
    }
}

export default validator