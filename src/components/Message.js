import React, { PropTypes } from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

const AVATAR_URL = 'https://avatars.slack-edge.com/2016-04-18/35512615170_341dd821da9224afd14f_512.jpg'

const Message = (props) =>
  <ListItem
    leftAvatar={<Avatar src={AVATAR_URL} />}
    primaryText={props.username}
    secondaryText={props.text}
    secondaryTextLines={1}
    rightIcon={<CommunicationChatBubble />}
  />

Message.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Message
