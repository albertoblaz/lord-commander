import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import SVG from 'svg-inline-react'

const NavButton = ({ link, name, icon }) =>
  <Link to={link}>
    <SVG src={icon}/>
    <span>{name}</span>
  </Link>

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}

export default NavButton
