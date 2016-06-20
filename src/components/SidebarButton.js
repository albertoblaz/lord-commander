import React, { PropTypes } from 'react'
import SVG from 'svg-inline-react'

import IconButton from 'material-ui/IconButton'

const style = {
  paddingRight: 0,
  marginBottom: '1rem',
}

const SidebarButton = ({ icon, name, onClick }) =>
  <IconButton
    tooltip={name}
    tooltipPosition="bottom-right"
    style={style}
    onClick={() => onClick(name)}
  >
    <SVG src={icon}/>
  </IconButton>

SidebarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SidebarButton
