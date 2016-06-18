import React, { PropTypes } from 'react'
import SVG from 'svg-inline-react'

import IconButton from 'material-ui/IconButton'

const style = {
  paddingRight: 0,
}

const Resource = ({ icon, tooltip, value }) =>
  <div>
    <IconButton tooltip={tooltip} disableTouchRipple={true} style={style}>
      <SVG className={'svg'} src={icon}/>
    </IconButton>
    <span>{value}</span>
  </div>

Resource.propTypes = {
  icon: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Resource
