import React, { PropTypes } from 'react'

const SidebarMenuPanel = ({ name, isMenuOpen, onClick }) =>
  <div className={`sidebar-menu ${isMenuOpen ? 'active' : ''}`}>
    <p>{name}</p>
    <span onClick={onClick}>Close</span>
  </div>

SidebarMenuPanel.propTypes = {
  name: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SidebarMenuPanel
