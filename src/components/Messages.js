import React, { PropTypes } from 'react'
import _ from 'lodash'

import Message from './Message'

const Messages = (props) =>
  <aside className="chat">
    <div>
      <h2>Chat</h2>
      <button onCLick={props.createNewChat}>+</button>
    </div>
    <ul>
      {_.map(props.messages, (message) => <Message key={message.id} {...message} />)}
    </ul>
  </aside>

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  createNewChat: PropTypes.func.isRequired,
}

export default Messages
