function httpResponse(res, statusCode, data){
    res.status(statusCode).json({ error: false, res: data })
}

export default httpResponse