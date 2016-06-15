import React, { PropTypes } from 'react'

const Army = (props) =>
  <span
    onClick={props.onClick.bind(this, props.id)}
    style={{ backgroundColor: 'yellow', color: 'black' }}
  >
    {props.owner === 'albertoblaz' ? 'AB' : 'WZ'}
  </span>

Army.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  provinceId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Army
