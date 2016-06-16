import React, { PropTypes } from 'react'

const CMenuProvince = ({ isMenuOpen, activeProvince }) =>
  !isMenuOpen ? null : (
    <aside className={'cmenu'}>
      <header>
        <strong>{activeProvince.name}</strong>
        <br></br>
        <span>{activeProvince.owner}</span>
      </header>
      <div>
        <br></br>
        <span>Terrain: {activeProvince.terrain}</span>
        <ul>
          {_renderResources(activeProvince.resources)}
        </ul>
      </div>
    </aside>
  )

const _renderResources = (resources) =>
  Object.keys(resources).map((k) =>
    <li key={k}>{k}: {resources[k]}</li>)

CMenuProvince.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  activeProvince: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired,
    terrain: PropTypes.string.isRequired,
  }),
}

export default CMenuProvince
