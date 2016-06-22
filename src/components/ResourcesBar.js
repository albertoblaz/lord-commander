import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'

import coins from '../../assets/icons/coins.svg'
import manpower from '../../assets/icons/soldier.svg'
import siridium from '../../assets/icons/diamond.svg'
import meganium from '../../assets/icons/diamond-1.svg'
import vylerium from '../../assets/icons/diamond-2.svg'
import tech from '../../assets/icons/science.svg'

import Resource from './Resource'
import Time from './Time'
import NavigationList from './NavigationList'

// 'svg-inline!icon.svg'

const ResourcesBar = ({ dispatch, session, resources }) =>
  !session || (
    <Toolbar className="resources">
      <ToolbarGroup>
        <Resource tooltip="Gold" icon={coins} value={resources.money}/>
        <Resource tooltip="Manpower" icon={manpower} value={resources.manpower}/>
        <div className="divider"></div>
        <Resource tooltip="Siridium" icon={siridium} value={resources.siridium}/>
        <Resource tooltip="Meganium" icon={meganium} value={resources.meganium}/>
        <Resource tooltip="Vylerium" icon={vylerium} value={resources.vylerium}/>
        <div className="divider"></div>
        <Resource tooltip="Technology" icon={tech} value={resources.technology}/>
      </ToolbarGroup>

      <Time dispatch={dispatch} />

      <NavigationList session={session} />
    </Toolbar>
  )

ResourcesBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resources: PropTypes.shape({
    money: PropTypes.number.isRequired,
    manpower: PropTypes.number.isRequired,
    siridium: PropTypes.number.isRequired,
    meganium: PropTypes.number.isRequired,
    vylerium: PropTypes.number.isRequired,
    technology: PropTypes.number.isRequired,
  }).isRequired,
  session: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }),
}

const sumResources = (playerResources, resources) => {
  const keys = Object.keys(playerResources)
  const values = _.map(keys, (k) =>
    _.isNumber(resources[k])
      ? parseInt(resources[k] + playerResources[k])
      : parseInt(playerResources[k])
  )
  return _.zipObject(keys, values)
}

const calculateResources = (playerResources, provinces, username) =>
  _(provinces)
    .filter((province) => province.owner === username)
    .map((province) => province.resources)
    .reduce(sumResources, playerResources)

const mapStateToProps = ({ session, map, provinces }) =>
  Object.assign({},
    session,
    { resources: session.session
        ? calculateResources(map.resources, provinces.provinces, session.session.username)
        : {},
    }
  )

export default connect(mapStateToProps)(ResourcesBar)
