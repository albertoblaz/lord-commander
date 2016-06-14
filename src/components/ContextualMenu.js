import React, { PropTypes } from 'react'
import _ from 'lodash'

const ContextualMenu = ({ activeProvince }) =>
  <aside>
    <header>
      <strong>{activeProvince.name}</strong>
      <br></br>
      <span>{activeProvince.owner}</span>
      <ul>
        {_renderResources(activeProvince.resources)}
      </ul>
    </header>
  </aside>

const _renderResources = (resources) =>
  Object.keys(resources).map((k) =>
    <li key={k}>{k}: {resources[k]}</li>)

ContextualMenu.propTypes = {
  activeProvince: PropTypes.object.isRequired,
}

export default ContextualMenu
