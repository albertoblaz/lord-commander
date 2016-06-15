import actions from '../actions/ProvinceActionCreators'

const initialState = {
  componentState: 'loading',
  provinces: {},
}

// const malusTerrain = (terrain) => {
//   switch (terrain) {
//     case 'plain': return 0
//     case 'valley': return -1
//     case 'mountain': return -2
//     case 'dessert': return -3
//     default: return 0
//   }
// }

const malusDuringConquest = ({ provinces }, province) => ({
  money: provinces[province].resources.money * 0.5,
  manpower: provinces[province].resources.manpower * 0.5,
})

const malusAfterConquest = ({ provinces }, province) => ({
  money: provinces[province].resources.money * 0.15,
  manpower: provinces[province].resources.manpower * 0.15,
})

const handlers = {
  [actions.ATTACK_PROVINCE]: (state, action) =>
    Object.assign({}, state, {
      provinces: {
        [action.province]: {
          underSiege: true,
          resources: malusDuringConquest(state, action.province),
        },
      },
    }),

  [actions.CONQUER_PROVINCE]: (state, action) =>
    Object.assign({}, state, {
      provinces: {
        [action.province]: {
          underSiege: false,
          owner: action.player,
          resources: malusAfterConquest(state, action.province),
        },
      },
    }),

  // ===
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
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
