import gameActions from '../actions/GameActionCreators'
import actions from '../actions/CMenuActionCreators'

const initialState = {
  isMenuOpen: false,
  activeProvince: null,
}

const handlers = {
  [gameActions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),

  [actions.SHOW_MENU_PROVINCE]: (state, action) =>
    Object.assign({}, state, {
      isMenuOpen: true,
      activeProvince: action.province,
    }),

  [actions.HIDE_MENU]: (state) =>
    Object.assign({}, state, {
      isMenuOpen: false,
      activeProvince: null,
    }),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
