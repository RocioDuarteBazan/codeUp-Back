function catched(funct){
    return (request, response, next) => {
        try {
            funct(request, response)
        }
        catch (err) {
            next ( err )
        }
        // funct(request, response).catch(err => next ( err ))
    }
}

export default catched