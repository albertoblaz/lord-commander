import _ from 'lodash'

import {
  registerAction as unboundRegisterAction,
  // registerAsyncAction as unboundRegisterAsyncAction,
} from '../utils/ActionUtils'

const actions = {}

const registerAction = _.partial(unboundRegisterAction, actions)
// const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

registerAction('SHOW_MENU_PROVINCE', ['province'])
registerAction('HIDE_MENU', [])

export default actions
