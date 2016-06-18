import React, { PropTypes } from 'react'
import SVG from 'svg-inline-react'

const SidebarButton = ({ icon, name, onClick }) =>
  <div onClick={() => onClick(name)}>
    <SVG src={icon}/>
    <p>{name}</p>
  </div>

SidebarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SidebarButton
