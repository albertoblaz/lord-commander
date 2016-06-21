import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import MapTable from '../components/MapTable'

import mapActions from '../actions/MapActionCreators'
import provinceActions from '../actions/ProvinceActionCreators'
import sidebarActions from '../actions/SidebarActionCreators'

class Map extends Component {
  constructor (props) {
    super(props)
    this._onClickProvince = this._onClickProvince.bind(this)
    this._onClickArmy = this._onClickArmy.bind(this)
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(provinceActions.getProvinces(), () => {
      dispatch(mapActions.startGame())
    })
  }

  render () {
    return (
      <MapTable
        componentState={this.props.componentState}
        provinces={this.props.provinces}
        armies={this.props.armies}
        onClickProvince={this._onClickProvince}
        onClickArmy={this._onClickArmy}
      />
    )
  }

  _onClickProvince (provinceId) {
    const province = this.props.provinces[provinceId]
    province && this.props.dispatch(sidebarActions.showMenuProvince({ province }))
  }

  _onClickArmy (armyId) {
    const army = this.props.armies[armyId]
    army && this.props.dispatch(sidebarActions.showMenuArmy({ army }))
  }
}

Map.propTypes = {
  dispatch: PropTypes.func.isRequired,
  componentState: PropTypes.string.isRequired,
  provinces: PropTypes.object.isRequired,
  armies: PropTypes.object.isRequired,
}

const mapStateToProps = ({ provinces, army }) =>
  Object.assign({}, provinces, { armies: army.armies })

export default connect(mapStateToProps)(Map)

