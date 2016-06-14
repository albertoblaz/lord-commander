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
registerAction('START_GAME', [])

registerAction('SHOW_MENU_PROVINCE', ['province'])
registerAction('HIDE_MENU', [])

// registerAsyncAction(ChatApi, 'sendText')
// registerAsyncAction(ChatApi, 'receiveText')

export default actions
