import actions from '../actions/SessionActionCreators'

const initialState = {
  componentState: 'loading',
  session: null,
  error: null,
}

const handlers = {
  [actions.CREATE_SESSION_REQUEST]: () =>
    initialState,

  [actions.CREATE_SESSION_RECEIVE]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'idle',
      session: action.session,
      error: null,
    }),

  [actions.CREATE_SESSION_FAILED]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'failed',
      session: null,
      error: action.error,
    }),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
