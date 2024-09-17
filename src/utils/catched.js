function catched(fn){
    return (req, res, next) => {
        fn(req, res).catch(err => next ( err ))
    }
}

export default catched