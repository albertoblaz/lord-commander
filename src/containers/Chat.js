import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
// import _ from 'lodash'

import Drawer from 'material-ui/Drawer'

import Loading from '../components/Loading'
import Messages from '../components/Messages'
import NewMessage from '../components/NewMessage'
import actions from '../actions/ChatActionCreators'

class Chat extends Component {
  constructor (props) {
    super(props)
    this._onHideChat = this._onHideChat.bind(this)
    this._onNewChat = this._onNewChat.bind(this)
    this._onShowAllMessages = this._onShowAllMessages.bind(this)
    this._onShowMessage = this._onShowMessage.bind(this)
    // this._onMessageReceived = this._onMessageReceived.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(actions.getAllMessages())
  }

  _renderContent () {
    if (this.props.componentState === 'loading') return this._renderLoading()
    if (this.props.componentState === 'idle') return this._renderIdle()
    if (this.props.componentState === 'failed') return this._renderFailed()
    if (this.props.componentState === 'new') return this._renderNewChat()
    return null
  }

  render () {
    return (
      <Drawer
        open={this.props.isOpen}
        openSecondary={true}
        containerClassName="chat"
      >
        {this._renderContent()}
      </Drawer>
    )
  }

  _renderLoading () {
    return <Loading/>
  }

  _renderIdle () {
    return (
      <Messages
        isOpen={this.props.isOpen}
        messages={this.props.messages}
        onClose={this._onHideChat}
        onNewChat={this._onNewChat}
      />
    )
  }

  _renderFailed () {
    return <span>Failed!</span>
  }

  _renderNewChat () {
    return (
      <NewMessage
        isOpen={this.props.isOpen}
        onBack={this._onShowAllMessages}
        onClose={this._onHideChat}
      />
    )
  }

  _onHideChat () {
    this.props.dispatch(actions.hideChatBar())
  }

  _onNewChat () {
    this.props.dispatch(actions.newMessage())
  }

  _onShowAllMessages () {
    this.props.dispatch(actions.showAllMessages())
  }

  _onShowMessage (messageId) {
    this.props.dispatch(actions.showMessage({ messageId }))
  }

  // _onMessageReceived (message) {
  //   this.props.dispatch(actions.sendText({ message }))
  // }
}

Chat.propTypes = {
  dispatch: PropTypes.func.isRequired,
  componentState: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = (state) =>
  Object.assign({}, state.chat)

export default connect(mapStateToProps)(Chat)
