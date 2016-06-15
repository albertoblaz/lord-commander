import React, { PropTypes } from 'react'
// import _ from 'lodash'

const ContextualMenu = ({ isMenuOpen, activeProvince, activeArmy }) =>
  !isMenuOpen ? null : (
    <aside>
      {activeProvince !== null
        ? _renderProvince(activeProvince)
        : _renderArmy(activeArmy)
      }
    </aside>
  )

const _renderResources = (resources) =>
  Object.keys(resources).map((k) =>
    <li key={k}>{k}: {resources[k]}</li>)

const _renderProvince = (activeProvince) =>
  <div>
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
  </div>

const _renderArmy = (activeArmy) =>
  <div>
    <strong>{activeArmy.name}</strong>
    <br></br>
    <span>{activeArmy.owner}</span>
  </div>

ContextualMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  activeProvince: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired,
    terrain: PropTypes.string.isRequired,
  }),
  activeArmy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    provinceId: PropTypes.string.isRequired,
  }),
}

export default ContextualMenu
