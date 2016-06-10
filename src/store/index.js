import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const middlewares = localStorage.getItem('redux-logger')
 ? applyMiddleware(thunkMiddleware, createLogger())
 : applyMiddleware(thunkMiddleware)

export const configureStore = (rootReducer, initialState) =>
  middlewares(createStore)(rootReducer, initialState)
