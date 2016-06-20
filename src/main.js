import '../sass/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import createRootReducer from './reducers'
import { configureStore } from './store'
import router from './router'

import { indigo500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: indigo500,
  },
})

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const rootReducer = createRootReducer()
const store = configureStore(rootReducer)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      {router}
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
