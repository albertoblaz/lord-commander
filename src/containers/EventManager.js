import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const EventManager = (props) =>
  <div>{this.state.time.format('MMM Do YYYY').valueOf()}</div>

EventManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => Object.assign({}, state.event)
export default connect(mapStateToProps)(EventManager)
