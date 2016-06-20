import { combineReducers } from 'redux'

import army from './ArmyReducer'
import chat from './ChatReducer'
import map from './MapReducer'
import provinces from './ProvinceReducer'
import session from './SessionReducer'
import sidebar from './SidebarReducer'

const reducer = (handlers, state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export default function createRootReducer (additionalReducers = {}) {
  const reducers = {
    army: army(reducer),
    chat: chat(reducer),
    map: map(reducer),
    provinces: provinces(reducer),
    session: session(reducer),
    sidebar: sidebar(reducer),
  }

  return combineReducers(Object.assign({}, additionalReducers, reducers))
}
