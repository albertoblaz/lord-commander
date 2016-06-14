import actions from '../actions/GameActionCreators'

const initialState = {
  isMenuOpen: false,
  activeProvince: null,

  resources: {
    money: 500,
    manpower: 20000,
    siridium: 1000,
    meganium: 500,
    vylerium: 80,
    technology: 3,
  },

  provinces: {
    '00': {
      owner: 'albertoblaz',
      id: '00',
      name: 'Antwerpen',
      resources: {
        money: 13,
        manpower: 40,
      },
    },
    '01': {
      owner: 'albertoblaz',
      id: '01',
      name: 'Venice',
      resources: {
        money: 7,
        manpower: 70,
      },
    },
    '02': {
      owner: 'adriantom3',
      id: '02',
      name: 'Paris',
      resources: {
        money: 3,
        manpower: 19,
      },
    },
  },
}

const malusAfterConquest = (state, province) => ({
  money: state.provinces[province].money * 0.5,
  manpower: state.provinces[province].manpower * 0.5,
})

const handlers = {
  [actions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),

  [actions.CONQUER_PROVINCE]: (state, action) =>
    Object.assign({}, state, {
      provinces: {
        [action.province]: {
          owner: action.player,
          resources: malusAfterConquest(state, action.province),
        },
      },
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
