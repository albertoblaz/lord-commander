import mapActions from '../actions/GameActionCreators'
import actions from '../actions/SidebarActionCreators'

const initialState = {
  isMenuFactionOpen: false,
  isMenuDiplomacyOpen: false,
  isMenuEconomyOpen: false,
  isMenuProductionOpen: false,
  isMenuTradeOpen: false,
  isMenuTechOpen: false,
  isMenuProvinceOpen: false,
  isMenuArmyOpen: false,
  activeProvince: null,
  activeArmy: null,
}

const handlers = {
  [mapActions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),

  [actions.SHOW_MENU]: (state, action) =>
    Object.assign({}, initialState, {
      [`isMenu${action.menu}Open`]: true,
    }),

  [actions.SHOW_MENU_PROVINCE]: (state, action) =>
    Object.assign({}, initialState, {
      isMenuProvinceOpen: true,
      activeProvince: action.province,
    }),

  [actions.SHOW_MENU_ARMY]: (state, action) =>
    Object.assign({}, initialState, {
      isMenuArmyOpen: true,
      activeArmy: action.army,
    }),

  [actions.HIDE_MENU]: () =>
    initialState,
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
