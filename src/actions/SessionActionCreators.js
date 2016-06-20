import _ from 'lodash'

import SessionAPI from '../apis/SessionAPI'

import {
  // registerAction as unboundRegisterAction,
  registerAsyncAction as unboundRegisterAsyncAction,
} from '../utils/ActionUtils'

const actions = {}

// const registerAction = _.partial(unboundRegisterAction, actions)
const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

registerAsyncAction(SessionAPI, 'createSession')

export default actions
