import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const TodoReducer = (state: string[] = [], action: any) => {
  if(action.type === "ADDTODO"){
    state = [...state, action.payload]
  } else if(action.type === "DELETETODO"){
    state = state.filter((el, i) => i !== action.payload)
  }
  return state;
}

const store = createStore(combineReducers({todo: TodoReducer}))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);