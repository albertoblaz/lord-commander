import React, { PropTypes } from 'react'

import Paper from 'material-ui/Paper'

const SidebarMenuProvince = ({ isMenuOpen, activeProvince, onClick }) =>
  isMenuOpen ? renderMenu(activeProvince, onClick) : null

const renderMenu = (activeProvince, onClick) =>
  <Paper zDepth={3} rounded={false} className={'sidebar-menu active'}>
    <header>
      <strong>{activeProvince.name}</strong>
      <br></br>
      <span>{activeProvince.owner || '<uncolonized>'}</span>
    </header>

    <div>
      <br></br>
      <span>Terrain: {activeProvince.terrain}</span>
      <ul>
        {renderResources(activeProvince.resources)}
      </ul>
      <span onClick={onClick}>Close</span>
    </div>
  </Paper>

const renderResources = (resources) =>
  Object.keys(resources).map((k) =>
    <li key={k}>{k}: {resources[k]}</li>)

SidebarMenuProvince.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  activeProvince: PropTypes.shape({
    owner: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired,
    terrain: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
}

export default SidebarMenuProvince
