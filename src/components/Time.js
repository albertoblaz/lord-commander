import React, { PropTypes, Component } from 'react'
import moment from 'moment'

import eventActions from '../actions/eventActionCreators'

const TIME_INIT = moment('2190-07-02').utc()
const DELAY = 1000

class Time extends Component {
  componentWillMount () {
    this.setState({ time: TIME_INIT })
  }

  componentDidMount () {
    this.timer = setInterval(this._interval.bind(this), DELAY)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <div>{this.state.time.format('MMM Do YYYY').valueOf()}</div>
  }

  _interval () {
    this._advanceTime()
    if (Math.random() < 0.01) this._triggerEvent()
  }

  _advanceTime () {
    const time = this.state.time.add(1, 'days')
    this.setState({ time })
  }

  _triggerEvent () {
    const n = Math.random()
    const eventCategory = (n < 0.5) ? 'easy' : (n < 0.75 ? 'medium' : 'hard')
    this.props.dispatch(eventActions.triggerEvent(eventCategory))
  }
}

Time.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default Time
