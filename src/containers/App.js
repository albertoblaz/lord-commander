import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
// import _ from 'lodash'

import Sidebar from './Sidebar'
import SidebarMenu from './SidebarMenu'
// import Chat from './Chat'

import actions from '../actions/SessionActionCreators'

class App extends Component {
  componentWillMount () {
    this.props.dispatch(actions.createSession())
  }

  render () {
    if (this.props.componentState === 'loading') return this._renderLoading()
    if (this.props.componentState === 'idle') return this._renderIdle()
    if (this.props.componentState === 'failed') return this._renderFailed()
    return null
  }

  _renderLoading () {
    return <span>Loading...</span>
  }

  _renderIdle () {
    return (
      <div>
        <Sidebar />
        <SidebarMenu />
        {this.props.children}
        {/* <Chat /> */}
      </div>
    )
  }

  _renderFailed () {
    return <span>Failed...</span>
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  componentState: PropTypes.string.isRequired,
}

const mapStateToProps = (props, router) =>
  Object.assign({}, props.session, router)

export default connect(mapStateToProps)(App)
