import React, { PropTypes } from 'react'

const Army = (props) =>
  <span>{props.owner === 'albertoblaz' ? 'AB' : 'WZ'}</span>

Army.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  provinceId: PropTypes.string.isRequired,
}

export default Army
