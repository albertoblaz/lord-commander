import React, { PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import Message from './Message'

const Messages = (props) =>
  <div>
    <AppBar
      title="Messages"
      iconElementLeft={
        <IconButton onTouchTap={props.onClose}>
          <NavigationClose />
        </IconButton>
      }
    />

    <FloatingActionButton
      className="btn-new-chat"
      mini={true}
      secondary={true}
      onClick={props.onNewChat}
    >
      <ContentAdd />
    </FloatingActionButton>

    <List>
      <Subheader>Recent chats</Subheader>
      {props.messages.map((message, index) =>
        <Message value={index} key={message.id} {...message} />
      )}
    </List>
  </div>

Messages.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  onNewChat: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Messages
