import React, { PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

// import Message from './Message'

const NewMessage = (props) =>
  <div>
    <AppBar
      title="New Message"
      iconElementLeft={
        <IconButton onTouchTap={props.onBack}>
          <KeyboardArrowLeft />
        </IconButton>
      }
    />

    <span>Chat here</span>
  </div>

NewMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default NewMessage
