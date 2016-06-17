import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import SidebarMenuPanel from '../components/SidebarMenuPanel'
import actions from '../actions/SidebarActionCreators'

class SidebarMenu extends Component {
  constructor (props) {
    super(props)
    this._onCloseMenu = this._onCloseMenu.bind(this)
  }

  _onCloseMenu () {
    this.props.dispatch(actions.hideMenu())
  }

  render () {
    const { props } = this
    return (
      <section>
        <SidebarMenuPanel name="Faction" isMenuOpen={props.isMenuFactionOpen} onClick={this._onCloseMenu}/>
        <SidebarMenuPanel name="Diplomacy" isMenuOpen={props.isMenuDiplomacyOpen} onClick={this._onCloseMenu}/>
        <SidebarMenuPanel name="Economy" isMenuOpen={props.isMenuEconomyOpen} onClick={this._onCloseMenu}/>
        <SidebarMenuPanel name="Production" isMenuOpen={props.isMenuProductionOpen} onClick={this._onCloseMenu}/>
        <SidebarMenuPanel name="Trade" isMenuOpen={props.isMenuTradeOpen} onClick={this._onCloseMenu}/>
        <SidebarMenuPanel name="Tech" isMenuOpen={props.isMenuTechOpen} onClick={this._onCloseMenu}/>
      </section>
    )
  }
}

SidebarMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMenuFactionOpen: PropTypes.bool.isRequired,
  isMenuDiplomacyOpen: PropTypes.bool.isRequired,
  isMenuEconomyOpen: PropTypes.bool.isRequired,
  isMenuProductionOpen: PropTypes.bool.isRequired,
  isMenuTradeOpen: PropTypes.bool.isRequired,
  isMenuTechOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, router) =>
  Object.assign({}, state.sidebar, router)

export default connect(mapStateToProps)(SidebarMenu)
