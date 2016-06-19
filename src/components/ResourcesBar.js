import React, { PropTypes } from 'react'

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'

import coins from '../../assets/icons/coins.svg'
import manpower from '../../assets/icons/soldier.svg'
import siridium from '../../assets/icons/diamond.svg'
import meganium from '../../assets/icons/diamond-1.svg'
import vylerium from '../../assets/icons/diamond-2.svg'
import tech from '../../assets/icons/science.svg'

import Resource from './Resource'
import NavigationList from './NavigationList'

// 'svg-inline!icon.svg'

const ResourcesBar = (props) =>
  <Toolbar className="resources">
    <ToolbarGroup>
      <Resource tooltip="Gold" icon={coins} value={props.money}/>
      <Resource tooltip="Manpower" icon={manpower} value={props.manpower}/>
      <div className="divider"></div>
      <Resource tooltip="Siridium" icon={siridium} value={props.siridium}/>
      <Resource tooltip="Meganium" icon={meganium} value={props.meganium}/>
      <Resource tooltip="Vylerium" icon={vylerium} value={props.vylerium}/>
      <div className="divider"></div>
      <Resource tooltip="Technology" icon={tech} value={props.technology}/>
    </ToolbarGroup>

    <NavigationList username={props.username}/>
  </Toolbar>

ResourcesBar.propTypes = {
  money: PropTypes.number.isRequired,
  manpower: PropTypes.number.isRequired,
  siridium: PropTypes.number.isRequired,
  meganium: PropTypes.number.isRequired,
  vylerium: PropTypes.number.isRequired,
  technology: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}

export default ResourcesBar
