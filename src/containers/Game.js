import React from 'react'

import Sidebar from './Sidebar'
import SidebarMenu from './SidebarMenu'
import ResourcesBar from '../components/ResourcesBar'
import Map from './Map'
import Chat from './Chat'

const Game = () =>
  <div>
    <Sidebar />
    <SidebarMenu />
    <div className="content">
      <ResourcesBar />
      <div>
        <Map />
        <Chat />
      </div>
    </div>
  </div>

export default Game
