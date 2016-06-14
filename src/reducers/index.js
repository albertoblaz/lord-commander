import { combineReducers } from 'redux'

import chat from './ChatReducer'
import game from './GameReducer'

const reducer = (handlers, state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export default function createRootReducer (additionalReducers = {}) {
  const reducers = {
    chat: chat(reducer),
    game: game(reducer),
  }

  return combineReducers(Object.assign({}, additionalReducers, reducers))
}
