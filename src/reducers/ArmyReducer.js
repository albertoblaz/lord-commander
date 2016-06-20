// import actions from '../actions/ArmyActionCreators'
import mapActions from '../actions/GameActionCreators'

const initialState = {
  armies: {
    '0': {
      id: '0',
      owner: 'albertoblaz',
      name: 'Grande Armée',
      provinceId: '22',
    },
    '1': {
      id: '1',
      owner: 'albertoblaz',
      name: '2nd Republican Army',
      provinceId: '23',
    },
    '2': {
      id: '2',
      owner: 'adriantom3',
      name: 'Imperial Army',
      provinceId: '32',
    },
  },
}

const handlers = {
  [mapActions.START_GAME]: (state) =>
    Object.assign({}, state, initialState),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
