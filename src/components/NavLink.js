import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavLink = ({ link, name }) =>
  <Link to={link}>
    <span>{name}</span>
  </Link>

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default NavLink
