import React, { PropTypes } from 'react'
import _ from 'lodash'

import { switchOnState } from '../utils/RenderUtils'
import Province from './Province'
import Army from './Army'

const MapTable = React.createClass({
  propTypes: {
    componentState: PropTypes.oneOf([
      'loading', 'idle', 'failed',
    ]).isRequired,
    provinces: PropTypes.object.isRequired,
    onClickProvince: PropTypes.func.isRequired,
    onClickArmy: PropTypes.func.isRequired,
  },

  _findArmy (provinceId) {
    const army = _(this.props.armies)
      .values()
      .find((a) => a.provinceId === provinceId)
    return army
      ? <Army {...army} onClick={this.props.onClickArmy}/>
      : null
  },

  _renderProvince (id) {
    const provinceProps = this.props.provinces[id]
    const army = this._findArmy(id)
    return (
      <Province
        {...provinceProps}
        key={id}
        army={army}
        onClick={this.props.onClickProvince}
      />
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
