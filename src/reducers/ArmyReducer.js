import actions from '../actions/ArmyActionCreators'

const initialState = {
  armies: {
    '0': {
      'id': '0',
      'owner': 'albertoblaz',
      'provinceId': '22',
    },
    '1': {
      'id': '1',
      'owner': 'albertoblaz',
      'provinceId': '23',
    },
    '2': {
      'id': '2',
      'owner': 'adriantom3',
      'provinceId': '32',
    },
  },
}

const handlers = {
  [actions.DEPLOY_ARMIES]: (state) =>
    Object.assign({}, state, initialState),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
