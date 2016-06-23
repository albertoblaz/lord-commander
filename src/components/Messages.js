import React, { PropTypes } from 'react'

import Drawer from 'material-ui/Drawer'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Message from './Message'

const Messages = (props) =>
  <Drawer open={true} openSecondary={true}>
    <div>
      <h2>Chat</h2>
      <FloatingActionButton
        mini={true}
        secondary={true}
        onCLick={props.createNewChat}
      >
        <ContentAdd />
      </FloatingActionButton>
    </div>

    <List>
      <Subheader>Recent chats</Subheader>
      {props.messages.map((message, index) =>
        <Message value={index} key={message.id} {...message} />
      )}
    </List>
  </Drawer>

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  createNewChat: PropTypes.func.isRequired,
}

export default Messages
