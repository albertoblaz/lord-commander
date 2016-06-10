import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import ResourcesBar from '../components/ResourcesBar'
import MapCanvas from '../components/MapCanvas'

import actions from '../actions/GameActionCreators'

class Game extends Component {
  componentWillMount () {
    this.props.dispatch(actions.startGame())
  }

  render () {
    return (
      <div>
        <ResourcesBar {...this.props.resources}/>
        <MapCanvas provinces={this.props.provinces}/>
      </div>
    )
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resources: PropTypes.object.isRequired,
  provinces: PropTypes.object.isRequired,
}

const sumResources = (playerResources, resources) => {
  const keys = Object.keys(playerResources)
  const values = _.map(keys, (k) =>
    _.isNumber(resources[k]) ? playerResources[k] + resources[k] : playerResources[k])
  return _.zipObject(keys, values)
}

const calculateResources = (playerResources, provinces) =>
  _(provinces)
    .filter((province) => province.owner === 'albertoblaz')
    .map((province) => province.resources)
    .reduce(sumResources, playerResources)

const mapStateToProps = (state) => ({
  provinces: state.game.provinces,
  resources: calculateResources(state.game.resources, state.game.provinces),
})

export default connect(mapStateToProps)(Game)

