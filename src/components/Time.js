import React, { Component } from 'react'

import moment from 'moment'

const TIME_INIT = moment('2190-07-02').utc()

class Time extends Component {
  componentWillMount () {
    this.setState({ time: TIME_INIT })
  }

  componentDidMount () {
    this.timer = setInterval(this._advanceTime.bind(this), 250)
  }

  _advanceTime () {
    const time = this.state.time.add(1, 'days')
    this.setState({ time })
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <div>{this.state.time.format('MMM Do YYYY').valueOf()}</div>
  }
}

export default Time
