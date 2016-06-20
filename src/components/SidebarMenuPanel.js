import React, { PropTypes } from 'react'

import Paper from 'material-ui/Paper'

const SidebarMenuPanel = ({ name, isMenuOpen, onClick }) =>
  <Paper zDepth={3} rounded={false} className={`sidebar-menu ${isMenuOpen ? 'active' : ''}`}>
    <p>{name}</p>
    <span onClick={onClick}>Close</span>
  </Paper>

SidebarMenuPanel.propTypes = {
  name: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SidebarMenuPanel
