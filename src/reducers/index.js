import { combineReducers } from 'redux'

import chatHandlers from './ChatReducer'
import gameHandlers from './GameReducer'

function reducer (handlers, state, action) {
  // '@@redux/INIT' or others are not handled
  if (handlers[action.type]) {
    return handlers[action.type](state, action)
  } else if (localStorage.getItem('redux-logger')) {
    console.warn('Unhandled action', action.type)
  }

  return state
}

export default function createRootReducer (additionalReducers = {}) {
  const reducers = {
    chat: chatHandlers(reducer),
    game: gameHandlers(reducer),
  }

  return combineReducers(Object.assign(additionalReducers, reducers))
}
