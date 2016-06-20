import React, { PropTypes } from 'react'

const Army = (props) =>
  <span
    onClick={(event) => _onClick(event, props)}
    style={{ backgroundColor: 'yellow', color: 'black' }}
  >
    {props.owner === 'albertoblaz' ? 'AB' : 'WZ'}
  </span>

const _onClick = (event, props) => {
  event.stopPropagation()
  props.onClick(props.id)
}

Army.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  provinceId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Army
