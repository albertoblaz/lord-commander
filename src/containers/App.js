import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
// import _ from 'lodash'

import Sidebar from './Sidebar'
import SidebarMenu from './SidebarMenu'
import ResourcesBar from '../components/ResourcesBar'
import Map from './Map'
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
        <div className={'content'}>
          <ResourcesBar />
          <Map />
        </div>
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

const mapStateToProps = (state, router) =>
  Object.assign({}, state.session, router)

export default connect(mapStateToProps)(App)
