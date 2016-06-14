import actions from '../actions/ProvinceActionCreators'

const initialState = {
  componentState: 'loading',
  provinces: {},
  isMenuOpen: false,
  activeProvince: null,
}

const malusAfterConquest = (state, province) => ({
  money: state.provinces[province].money * 0.5,
  manpower: state.provinces[province].manpower * 0.5,
})

const handlers = {
  [actions.CONQUER_PROVINCE]: (state, action) =>
    Object.assign({}, state, {
      provinces: {
        [action.province]: {
          owner: action.player,
          resources: malusAfterConquest(state, action.province),
        },
      },
    }),

  [actions.GET_PROVINCES_REQUEST]: (state) =>
    Object.assign({}, state, initialState),

  [actions.GET_PROVINCES_RECEIVE]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'idle',
      provinces: action.provinces,
    }),

  [actions.GET_PROVINCES_FAILED]: (state) =>
    Object.assign({}, state, {
      componentState: 'failed',
      provinces: {},
    }),

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
