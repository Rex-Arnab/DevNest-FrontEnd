import React from 'react'

const MyReactContext = React.createContext();

function loginReducer(state, action){
    switch(action.type){
        case 'login': {
            return { status: true };
        }
        case 'logout': {
            return { status: false };
        }
        case 'isLogin': {
            return state.status;
        }
    }
}


function MyReactProvider({ children }){
    const [state, dispatch] = React.useReducer(loginReducer, { status: false })

    const value = { state, dispatch };

    return (
        <MyReactContext.Provider value={value}> {children} </MyReactContext.Provider> 
    )
}

export {
    MyReactProvider,
    MyReactContext
}