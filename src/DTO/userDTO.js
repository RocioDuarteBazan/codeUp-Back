function userDTO(user, token) {
    return {
        data: {
            "_id": user._id,
            "name": user.name,
            "lastname": user.lastname,
            "email": user.email,
            "age": user.age,
            "role": user.role
        },
        "token": token
    }
}

export default userDTO