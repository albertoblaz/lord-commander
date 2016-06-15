import { combineReducers } from 'redux'

import army from './ArmyReducer'
import chat from './ChatReducer'
import cmenu from './ContextualMenuReducer'
import game from './GameReducer'
import provinces from './ProvinceReducer'

const reducer = (handlers, state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export default function createRootReducer (additionalReducers = {}) {
  const reducers = {
    army: army(reducer),
    chat: chat(reducer),
    cmenu: cmenu(reducer),
    game: game(reducer),
    provinces: provinces(reducer),
  }

  return combineReducers(Object.assign({}, additionalReducers, reducers))
}
