import React, { PropTypes } from 'react'
import _ from 'lodash'

import { switchOnState } from '../utils/RenderUtils'

const MapTable = React.createClass({
  propTypes: {
    componentState: PropTypes.oneOf([
      'loading', 'idle', 'failed',
    ]).isRequired,
    provinces: PropTypes.object.isRequired,
    onClickProvince: PropTypes.func.isRequired,
  },

  _onClickProvince (id) {
    this.props.onClickProvince(id)
  },

  _renderProvince (id) {
    const { name, owner } = this.props.provinces[id]
    const style = owner === 'albertoblaz'
      ? { backgroundColor: 'blue' }
      : { backgroundColor: 'red' }
    return (
      <td
        key={id}
        onClick={this._onClickProvince.bind(this, id)}
        style={style}
      >
        {name}
      </td>
    )
  },

  _renderRows (i) {
    return (
      <tr key={i}>
        {_.range(5).map((j) => this._renderProvince(`${i}${j}`))}
      </tr>
    )
  },

  _renderLoading () {
    return <span>Loading...</span>
  },

  _renderIdle () {
    return (
      <table width={500} height={500}>
        <tbody>
          {_.range(5).map((i) => this._renderRows(i))}
        </tbody>
      </table>
    )
  },

  _renderFailed () {
    return <span>Failed!</span>
  },

  render: switchOnState('componentState', {
    loading: '_renderLoading',
    idle: '_renderIdle',
    failed: '_renderFailed',
  }),
})

export default MapTable
