import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import Loading from '../components/Loading'
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
    return <Loading />
  }

  _renderIdle () {
    return this.props.children
  }

  _renderFailed () {
    return <span>{this.props.error}</span>
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  componentState: PropTypes.string.isRequired,
  session: PropTypes.object,
  error: PropTypes.object,
}

const mapStateToProps = (state, router) =>
  Object.assign({}, state.session, router)

export default connect(mapStateToProps)(App)
