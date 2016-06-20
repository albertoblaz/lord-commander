import React, { PropTypes } from 'react'

import Paper from 'material-ui/Paper'

const SidebarMenuArmy = ({ isMenuOpen, activeArmy, onClick }) =>
  isMenuOpen ? renderMenu(activeArmy, onClick) : null

const renderMenu = (activeArmy, onClick) =>
  <Paper zDepth={3} rounded={false} className={'sidebar-menu active'}>
    <header>
      <strong>{activeArmy.name}</strong>
      <br></br>
      <span>{activeArmy.owner}</span>
    </header>

    <div>
      <br></br>
      <span onClick={onClick}>Close</span>
    </div>
  </Paper>

SidebarMenuArmy.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  activeArmy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    provinceId: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
}

export default SidebarMenuArmy
