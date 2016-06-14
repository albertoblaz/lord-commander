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
}

const handlers = {
  [actions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
