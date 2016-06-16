import React from 'react'

import game from '../../assets/icons/joystick.svg'
import stats from '../../assets/icons/graph.svg'
import settings from '../../assets/icons/settings.svg'

import NavButton from '../components/NavButton'

const Navigation = () =>
  <nav className={'navigation'}>
    <ul>
      <li><NavButton name="Game" icon={game} link="/"/></li>
      <li><NavButton name="Stats" icon={stats} link="/stats" /></li>
      <li><NavButton name="Settings" icon={settings} link="/settings"/></li>
    </ul>
  </nav>

export default Navigation
