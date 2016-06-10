import actions from '../actions/GameActionCreators'

const initialState = {
  resources: {
    money: 500,
    manpower: 20000,
    siridium: 1000,
    meganium: 500,
    vylerium: 80,
    technology: 3,
  },
  provinces: {
    'a': {
      owner: 'albertoblaz',
      id: 1,
      name: 'a',
      resources: {
        money: 13,
        manpower: 40,
      },
    },
    'b': {
      owner: 'albertoblaz',
      id: 2,
      name: 'a',
      resources: {
        money: 7,
        manpower: 70,
      },
    },
    'c': {
      owner: 'adriantom3',
      id: 3,
      name: 'a',
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
  [actions.START_GAME]: (state, action) =>
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
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
