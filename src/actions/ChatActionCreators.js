import _ from 'lodash'

import ChatApi from '../apis/ChatAPI'

import {
  registerAction as unboundRegisterAction,
  registerAsyncAction as unboundRegisterAsyncAction,
} from '../utils/ActionUtils'

const actions = {}

const registerAction = _.partial(unboundRegisterAction, actions)
const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

// asynchronous actions
registerAction('TOGGLE_CHAT_BAR', [])
registerAction('SHOW_CHAT_BAR', [])
registerAction('HIDE_CHAT_BAR', [])

registerAction('SHOW_ALL_MESSAGES', [])
registerAction('SHOW_MESSAGE', ['messageId'])
registerAction('NEW_MESSAGE', [])
// registerAction('SEND_TEXT', ['text', 'timestamp'])
// registerAction('RECEIVE_TEXT', ['text', 'timestamp'])

registerAsyncAction(ChatApi, 'getAllMessages')
// registerAsyncAction(ChatApi, 'receiveText')

export default actions
