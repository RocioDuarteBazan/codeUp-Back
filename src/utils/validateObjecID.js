import { isValidObjectId } from "mongoose";

function validateOID (id){
    return isValidObjectId(id)
}

export default validateOID