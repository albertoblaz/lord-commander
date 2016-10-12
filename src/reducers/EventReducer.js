import actions from '../actions/MapActionCreators'

const initialState = {
  easy: {
    name: 'Easy Event',
    message: 'Comet Sighted from your country',
    options: [
      { money: -20 },
      { money: -10, manpower: -10 },
      { money: 0, manpower: -50 },
    ],
  },

  medium: {
    name: 'Medium Event',
    message: 'Enemy declared war on you',
    options: [
      { money: -50 },
      { money: -20, manpower: -50 },
      { money: 0, manpower: -100 },
    ],
  },

  hard: {
    name: 'Hard Event',
    message: 'CRISIS!',
    options: [
      { money: -100 },
      { money: -200 },
    ],
  },
}

const handlers = {
  [actions.TRIGGER_GAME]: (state) =>
    Object.assign({}, state, initialState),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
