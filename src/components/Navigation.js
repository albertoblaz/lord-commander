import React from 'react'

import NavLink from '../components/NavLink'

const NavigationDropdown = () =>
  <nav className={'navigation'}>
    <ul>
      <li><NavLink name="Profile" link="/profile"/></li>
      <li><NavLink name="Stats" link="/stats" /></li>
      <li><NavLink name="Leaderboard" link="/leaderboard" /></li>
      <li><NavLink name="Settings" link="/settings"/></li>
      <li className="separator"></li>
      <li><NavLink name="Exit Game" link="/exit"/></li>
    </ul>
  </nav>

export default NavigationDropdown
