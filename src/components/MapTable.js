import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

class MapTable extends Component {
  _onClickProvince (id) {
    this.props.onClickProvince(id)
  }

  _renderProvince (id) {
    return (
      <td
        key={id}
        onClick={this._onClickProvince.bind(this, id)}
      >
        {id}
      </td>
    )
  }

  _renderRows (i) {
    return (
      <tr key={i}>
        {_.range(5).map((j) => this._renderProvince(`${i}${j}`))}
      </tr>
    )
  }

  render () {
    return (
      <table width={500} height={500}>
        <tbody>
          {_.range(5).map((i) => this._renderRows(i))}
        </tbody>
      </table>
    )
  }
}

MapTable.propTypes = {
  provinces: PropTypes.object.isRequired,
  onClickProvince: PropTypes.func.isRequired,
}

export default MapTable
