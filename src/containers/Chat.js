import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
// import _ from 'lodash'

import Messages from '../components/Messages'
import actions from '../actions/ChatActionCreators'

class Chat extends Component {
  // constructor (props) {
  //   super(props)
  //   this._createNewChat = this._createNewChat.bind(this)
  //   this._sendMessageHandler = this._sendMessageHandler.bind(this)
  // }

  componentWillMount () {
    this.props.dispatch(actions.getAllMessages())
  }

  // _createNewChat () {

  // }

  // _sendMessageHandler (message) {
  //   this.props.dispatch(actions.sendText({ message }))
  // }

  render () {
    return (
      <Messages
        messages={this.props.messages}
        // createNewChat={this._createNewChat}
        // sendMesssageHandler={this._sendMessageHandler}
      />
    )
  }
}

Chat.propTypes = {
  dispatch: PropTypes.func.isRequired,
  messages: PropTypes.array,
}

const mapStateToProps = (state) =>
  Object.assign({}, state.chat)

export default connect(mapStateToProps)(Chat)
