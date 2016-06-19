import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ToolbarGroup from 'material-ui/Toolbar'
import Avatar from 'material-ui/Avatar'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import IconMenu from 'material-ui/IconMenu'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

const USER_AVATAR = 'https://avatars.slack-edge.com/2016-04-18/35512615170_341dd821da9224afd14f_512.jpg'

const NavigationList = (props) =>
  <ToolbarGroup className="navigation">
    <FlatButton className="user-button">
      <IconMenu
        iconButtonElement={renderButton(props.username, USER_AVATAR)}
        anchorOrigin={{ 'horizontal': 'left', 'vertical': 'bottom' }}
        targetOrigin={{ 'horizontal': 'middle', 'vertical': 'top' }}
      >
        {renderLink('/profile')}
        {renderLink('/stats')}
        {renderLink('/leaderboard')}
        {renderLink('/settings')}
        <Divider />
        {renderLink('/exit')}
      </IconMenu>
    </FlatButton>
  </ToolbarGroup>

const renderButton = (username, avatar) =>
  <div>
    <Avatar className="user-avatar" src={avatar} size={30}/>
    <span>{username}</span>
    <NavigationExpandMoreIcon />
  </div>

const renderLink = (link) =>
  <Link className="nav-link" to={link}>
    <MenuItem primaryText={`${link.charAt(1).toUpperCase()}${link.slice(2)}`}/>
  </Link>

NavigationList.propTypes = {
  username: PropTypes.string.isRequired,
}

export default NavigationList
