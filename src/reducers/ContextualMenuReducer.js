import gameActions from '../actions/GameActionCreators'
import actions from '../actions/CMenuActionCreators'

const initialState = {
  isMenuProvinceOpen: false,
  isMenuArmyOpen: false,
  activeProvince: null,
  activeArmy: null,
}

const handlers = {
  [gameActions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),

  [actions.SHOW_MENU_PROVINCE]: (state, action) =>
    Object.assign({}, state, {
      isMenuProvinceOpen: true,
      isMenuArmyOpen: false,
      activeProvince: action.province,
      activeArmy: null,
    }),

  [actions.SHOW_MENU_ARMY]: (state, action) =>
    Object.assign({}, state, {
      isMenuProvinceOpen: false,
      isMenuArmyOpen: true,
      activeProvince: null,
      activeArmy: action.army,
    }),

  [actions.HIDE_MENU]: (state) =>
    Object.assign({}, state, initialState),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
