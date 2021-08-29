export interface User {
    username: string,
    profilePicture: string
}

const updateUser = (user: User) => {
    return {
        type: "UPDATE_USER",
        payload: user
    }
}