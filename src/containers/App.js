import React, { PropTypes } from 'react'
// import _ from 'lodash'

import Navigation from './Navigation'
import Chat from './Chat'

const App = (props) =>
  <div>
    <Navigation />
    {props.children}
    {/*<Chat />*/}
  </div>

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
