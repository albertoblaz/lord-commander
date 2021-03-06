import _ from 'lodash'

import ProvincesApi from '../apis/ProvincesAPI'

import {
  // registerAction as unboundRegisterAction,
  registerAsyncAction as unboundRegisterAsyncAction,
} from '../utils/ActionUtils'

const actions = {}

// const registerAction = _.partial(unboundRegisterAction, actions)
const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

registerAsyncAction(ProvincesApi, 'getProvinces')

export default actions
