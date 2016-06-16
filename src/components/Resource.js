import React, { PropTypes } from 'react'
import SVG from 'svg-inline-react'

const Resource = ({ icon, value }) =>
  <li>
    <SVG src={icon}/>
    <span>{value}</span>
  </li>

Resource.propTypes = {
  icon: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
}

export default Resource
