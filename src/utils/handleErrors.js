function handleErrors(error, req, res, next){
    console.log(error);
    res.status( error.statusCode ).json({error: true , message: error.message})
}

export default handleErrors