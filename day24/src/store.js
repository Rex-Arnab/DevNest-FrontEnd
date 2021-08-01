import React, { createContext, useReducer } from 'react'

const LoginContext = createContext();

const CountReducer = (state, action) => {
  switch(action.type){
    case 'toggle': {
      return {login: !state.login}
    }
    default: {
      return state
    }
  }
}

const LoginProvider = ({children}) => {
    const [state, dispatch] = useReducer(CountReducer, {login: false})
    const value = {state, dispatch}
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  }

  
export {
    LoginProvider,
    LoginContext
}