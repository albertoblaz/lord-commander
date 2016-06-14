import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reduxUnhandledAction from 'redux-unhandled-action'

const callback = (action) =>
	console.warn(`${action.type} was unhandled or didn't lead to creation of a new state object`)

const middlewares = localStorage.getItem('redux-logger')
 ? applyMiddleware(thunkMiddleware, reduxUnhandledAction(callback), createLogger())
 : applyMiddleware(thunkMiddleware, reduxUnhandledAction(callback))

export const configureStore = (rootReducer, initialState) =>
  createStore(rootReducer, initialState, middlewares)
