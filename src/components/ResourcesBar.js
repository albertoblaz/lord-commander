import React, { PropTypes } from 'react'

import coins from '../../assets/icons/coins.svg'
import manpower from '../../assets/icons/soldier.svg'
import siridium from '../../assets/icons/diamond.svg'
import meganium from '../../assets/icons/diamond-1.svg'
import vylerium from '../../assets/icons/diamond-2.svg'
import tech from '../../assets/icons/science.svg'

import Resource from './Resource'

// 'svg-inline!icon.svg'

const ResourcesBar = (props) =>
  <header className={'resources'}>
    <ul>
      <Resource icon={coins} value={props.money}/>
      <Resource icon={manpower} value={props.manpower}/>

      <Resource icon={siridium} value={props.siridium}/>
      <Resource icon={meganium} value={props.meganium}/>
      <Resource icon={vylerium} value={props.vylerium}/>

      <Resource icon={tech} value={props.technology}/>
    </ul>
  </header>

ResourcesBar.propTypes = {
  money: PropTypes.number.isRequired,
  manpower: PropTypes.number.isRequired,
  siridium: PropTypes.number.isRequired,
  meganium: PropTypes.number.isRequired,
  vylerium: PropTypes.number.isRequired,
  technology: PropTypes.number.isRequired,
}

export default ResourcesBar
