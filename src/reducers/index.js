import { combineReducers } from 'redux'

import chat from './ChatReducer'
import game from './GameReducer'
import provinces from './ProvinceReducer'

const reducer = (handlers, state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export default function createRootReducer (additionalReducers = {}) {
  const reducers = {
    chat: chat(reducer),
    game: game(reducer),
    provinces: provinces(reducer),
  }

  return combineReducers(Object.assign({}, additionalReducers, reducers))
}
