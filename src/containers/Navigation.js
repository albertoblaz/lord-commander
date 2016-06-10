import React from 'react'
import { Link } from 'react-router'

const Navigation = () =>
  <nav>
    <ul>
      <li><Link to="/">Game</Link></li>
      <li><Link to="/stats">Stats</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>

export default Navigation
