function userDTO( user ) {

    return {
        "_id": user._id,
        "name": user.name,
        "lastname": user.lastname,
        "email": user.email,
        "age": user.age,
        "role": user.role
    }

}

export default userDTO