import _ from 'lodash'

// import ChatApi from '../apis/ChatAPI'

import {
  registerAction as unboundRegisterAction,
  // registerAsyncAction as unboundRegisterAsyncAction,
} from '../utils/ActionUtils'

const actions = {}

const registerAction = _.partial(unboundRegisterAction, actions)
// const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

registerAction('START_GAME', [])

export default actions
