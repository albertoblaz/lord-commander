import React, { PropTypes } from 'react'

const CMenuArmy = ({ isMenuOpen, activeArmy }) =>
  !isMenuOpen ? null : (
    <aside className={'cmenu'}>
      <strong>{activeArmy.name}</strong>
      <br></br>
      <span>{activeArmy.owner}</span>
    </aside>
  )

CMenuArmy.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  activeArmy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    provinceId: PropTypes.string.isRequired,
  }),
}

export default CMenuArmy
