import actions from '../actions/ChatActionCreators'

const initialState = {
  componentState: 'loading',
  isOpen: false,
  messages: [],
  error: null,
}

const handlers = {
  [actions.GET_ALL_MESSAGES_REQUEST]: () =>
    initialState,

  [actions.GET_ALL_MESSAGES_RECEIVE]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'idle',
      messages: action.messages,
      error: null,
    }),

  [actions.GET_ALL_MESSAGES_FAILED]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'failed',
      error: action.error,
    }),

  // ===
  [actions.TOGGLE_CHAT_BAR]: (state) =>
    Object.assign({}, state, {
      isOpen: !state.isOpen,
    }),

  [actions.SHOW_CHAT_BAR]: (state) =>
    Object.assign({}, state, {
      isOpen: true,
    }),

  [actions.HIDE_CHAT_BAR]: (state) =>
    Object.assign({}, state, {
      isOpen: false,
    }),

  // ===
  [actions.SHOW_ALL_MESSAGES]: (state) =>
    Object.assign({}, state, {
      componentState: 'idle',
      activeMessage: null,
    }),

  [actions.SHOW_MESSAGE]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'new',
      activeMessage: action.messageId,
    }),

  [actions.NEW_MESSAGE]: (state) =>
    Object.assign({}, state, {
      componentState: 'new',
    }),

  // ===
  // [actions.SEND_TEXT]: (state, action) =>
  //   Object.assign({}, state, {
  //     username: action.username,
  //     text: action.text,
  //     timestamp: new Date().time,
  //   }),

  // [actions.RECEIVE_TEXT]: (state, action) =>
  //   Object.assign({}, state, {
  //     username: action.username,
  //     img: lookupImage(action.username),
  //     text: action.text,
  //     timestamp: new Date().time,
  //   }),
}

export default (reducer) =>
  (state = initialState, action) =>
    reducer(handlers, state, action)
