import React, { PropTypes } from 'react'
// import _ from 'lodash'

import Sidebar from './Sidebar'
import SidebarMenu from './SidebarMenu'
import Chat from './Chat'

const App = (props) =>
  <div>
    <Sidebar />
    <SidebarMenu />
    {props.children}
    {/*<Chat />*/}
  </div>

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
