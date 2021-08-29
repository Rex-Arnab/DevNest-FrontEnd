import { User } from "../actions"

const initialUser = {
    username: '',
    profilePicture: ''
}

export interface ActionType {
    type: "UPDATE_USER",
    payload: User
}

const userReducer = (state:User = initialUser, action: ActionType) => {
    if(action.type === "UPDATE_USER"){
        return action.payload
    }
    return state;
}

export default userReducer;