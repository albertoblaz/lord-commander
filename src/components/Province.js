import React, { PropTypes } from 'react'

const Province = (props) => {
  const { id, name, owner, terrain, army } = props
  const style = owner === 'albertoblaz'
      ? { backgroundColor: 'blue' }
      : { backgroundColor: 'magenta' }
  return (
    <td
      style={style}
      onClick={props.onClick.bind(this, id)}
    >
      <strong>{name}</strong>
      <br></br>
      <span>{terrain}</span>
      <br></br>
      <br></br>
      {army}
    </td>
  )
}

Province.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  army: PropTypes.object,
}

export default Province
