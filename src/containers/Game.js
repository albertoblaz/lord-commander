import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import ResourcesBar from '../components/ResourcesBar'
// import MapCanvas from '../components/MapCanvas'
import MapTable from '../components/MapTable'
import ContextualMenu from '../components/ContextualMenu'

import gameActions from '../actions/GameActionCreators'
import provinceActions from '../actions/ProvinceActionCreators'

class Game extends Component {
  constructor (props) {
    super(props)
    this._onClickProvince = this._onClickProvince.bind(this)

    this.props.dispatch(gameActions.startGame())
    this.props.dispatch(provinceActions.getProvinces())
  }

  render () {
    return (
      <div>
        <ResourcesBar {...this.props.resources}/>

        <MapTable
          componentState={this.props.componentState}
          provinces={this.props.provinces}
          onClickProvince={this._onClickProvince}
        />

        {this._renderContextualMenu()}

        <span onClick={() => this._onCloseMenu()}>Close</span>
      </div>
    )
  }

  _renderContextualMenu () {
    return this.props.isMenuOpen && this.props.activeProvince
      ? <ContextualMenu activeProvince={this.props.activeProvince}/>
      : null
  }

  _onCloseMenu () {
    this.props.dispatch(provinceActions.hideMenu())
  }

  _onClickProvince (provinceId) {
    const province = this.props.provinces[provinceId]
    province && this.props.dispatch(provinceActions.showMenuProvince({ province }))
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  componentState: PropTypes.string.isRequired,
  resources: PropTypes.object.isRequired,
  provinces: PropTypes.object.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  activeProvince: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired,
    terrain: PropTypes.string.isRequired,
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

const mapStateToProps = ({ game, provinces }) =>
  Object.assign({}, provinces, {
    resources: calculateResources(game.resources, provinces.provinces),
  })

export default connect(mapStateToProps)(Game)

