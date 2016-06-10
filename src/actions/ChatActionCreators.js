import _ from 'lodash'

// import ChatApi from '../apis/ChatAPI'

import {
  registerAction as unboundRegisterAction,
  // registerAsyncAction as unboundRegisterAsyncAction,
} from '../utils/ActionUtils'

const actions = {}

const registerAction = _.partial(unboundRegisterAction, actions)
// const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

// asynchronous actions
registerAction('GET_ALL_MESSAGES', ['messages'])
registerAction('SEND_TEXT', ['text', 'timestamp'])
registerAction('RECEIVE_TEXT', ['text', 'timestamp'])

// registerAsyncAction(ChatApi, 'sendText')
// registerAsyncAction(ChatApi, 'receiveText')

export default actions
