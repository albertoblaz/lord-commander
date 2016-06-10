// import '../../sass/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createRootReducer from './reducers'
import { configureStore } from './store'
import router from './router'

const rootReducer = createRootReducer()
const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)
