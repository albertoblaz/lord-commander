import React, { PropTypes } from 'react'
// import _ from 'lodash'

const ResourcesBar = (props) =>
  <header>
    <ul>
      <li>Money: {props.money}</li>

      <li>Man Power: {props.manpower}</li>

      <li>Siridium: {props.siridium}</li>
      <li>Meganium: {props.meganium}</li>
      <li>Vylerium: {props.vylerium}</li>

      <li>Technology: {props.technology}</li>
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
