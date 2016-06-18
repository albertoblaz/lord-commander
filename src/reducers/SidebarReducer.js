import gameActions from '../actions/GameActionCreators'
import actions from '../actions/SidebarActionCreators'

const initialState = {
  isMenuFactionOpen: false,
  isMenuDiplomacyOpen: false,
  isMenuEconomyOpen: false,
  isMenuProductionOpen: false,
  isMenuTradeOpen: false,
  isMenuTechOpen: false,
}

const handlers = {
  [gameActions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),

  [actions.SHOW_MENU]: (state, action) =>
    Object.assign({}, initialState, {
      [`isMenu${action.menu}Open`]: true,
    }),

  [actions.HIDE_MENU]: () =>
    initialState,
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
