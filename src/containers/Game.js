import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import ResourcesBar from '../components/ResourcesBar'
import MapTable from '../components/MapTable'

import gameActions from '../actions/GameActionCreators'
import provinceActions from '../actions/ProvinceActionCreators'
import sidebarActions from '../actions/SidebarActionCreators'

class Game extends Component {
  constructor (props) {
    super(props)
    this._onClickProvince = this._onClickProvince.bind(this)
    this._onClickArmy = this._onClickArmy.bind(this)

    this.props.dispatch(gameActions.startGame())
    this.props.dispatch(provinceActions.getProvinces())
  }

  render () {
    return (
      <div className={'content'}>
        <ResourcesBar username="albertoblaz" {...this.props.resources}/>

        <MapTable
          componentState={this.props.componentState}
          provinces={this.props.provinces}
          armies={this.props.armies}
          onClickProvince={this._onClickProvince}
          onClickArmy={this._onClickArmy}
        />
      </div>
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

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,

  resources: PropTypes.object.isRequired,

  componentState: PropTypes.string.isRequired,
  provinces: PropTypes.object.isRequired,

  armies: PropTypes.object.isRequired,
}

const sumResources = (playerResources, resources) => {
  const keys = Object.keys(playerResources)
  const values = _.map(keys, (k) =>
    _.isNumber(resources[k]) ? parseInt(resources[k] + playerResources[k]) : parseInt(playerResources[k]))
  return _.zipObject(keys, values)
}

const calculateResources = (playerResources, provinces) =>
  _(provinces)
    .filter((province) => province.owner === 'albertoblaz')
    .map((province) => province.resources)
    .reduce(sumResources, playerResources)

const mapStateToProps = (state) =>
  Object.assign({},
    state.provinces,
    { armies: state.army.armies },
    { resources: calculateResources(state.game.resources, state.provinces.provinces) }
  )

export default connect(mapStateToProps)(Game)

