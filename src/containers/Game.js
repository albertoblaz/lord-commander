import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import ResourcesBar from '../components/ResourcesBar'
// import MapCanvas from '../components/MapCanvas'
import MapTable from '../components/MapTable'

import CMenuProvince from './CMenuProvince'
import CMenuArmy from './CMenuArmy'

import gameActions from '../actions/GameActionCreators'
import provinceActions from '../actions/ProvinceActionCreators'
// import armyActions from '../actions/ArmyActionCreators'
import cMenuActions from '../actions/CMenuActionCreators'

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
        <ResourcesBar {...this.props.resources}/>

        <MapTable
          componentState={this.props.componentState}
          provinces={this.props.provinces}
          armies={this.props.armies}
          onClickProvince={this._onClickProvince}
          onClickArmy={this._onClickArmy}
        />

        <CMenuProvince
          isMenuOpen={this.props.isMenuProvinceOpen}
          activeProvince={this.props.activeProvince}
        />

        <CMenuArmy
          isMenuOpen={this.props.isMenuArmyOpen}
          activeArmy={this.props.activeArmy}
        />

        <span onClick={() => this._onCloseMenu()}>Close</span>
      </div>
    )
  }

  _onCloseMenu () {
    this.props.dispatch(cMenuActions.hideMenu())
  }

  _onClickProvince (provinceId) {
    const province = this.props.provinces[provinceId]
    province && this.props.dispatch(cMenuActions.showMenuProvince({ province }))
  }

  _onClickArmy (armyId) {
    const army = this.props.armies[armyId]
    army && this.props.dispatch(cMenuActions.showMenuArmy({ army }))
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,

  resources: PropTypes.object.isRequired,

  componentState: PropTypes.string.isRequired,
  provinces: PropTypes.object.isRequired,

  armies: PropTypes.object.isRequired,

  isMenuProvinceOpen: PropTypes.bool.isRequired,
  isMenuArmyOpen: PropTypes.bool.isRequired,
  activeProvince: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired,
    terrain: PropTypes.string.isRequired,
  }),
  activeArmy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    provinceId: PropTypes.string.isRequired,
  }),
}

const sumResources = (playerResources, resources) => {
  const keys = Object.keys(playerResources)
  const values = _.map(keys, (k) =>
    _.isNumber(resources[k]) ? resources[k] + playerResources[k] : playerResources[k])
  return _.zipObject(keys, values)
}

const calculateResources = (playerResources, provinces) =>
  _(provinces)
    .filter((province) => province.owner === 'albertoblaz')
    .map((province) => province.resources)
    .reduce(sumResources, playerResources)

const mapStateToProps = (state) =>
  Object.assign({},
    state.cmenu,
    state.provinces,
    { armies: state.army.armies },
    { resources: calculateResources(state.game.resources, state.provinces.provinces) }
  )

export default connect(mapStateToProps)(Game)

