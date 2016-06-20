import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import game from '../../assets/icons/joystick.svg'
import stats from '../../assets/icons/graph.svg'
import settings from '../../assets/icons/settings.svg'

import SidebarButton from '../components/SidebarButton'
import actions from '../actions/SidebarActionCreators'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this._onClickButton = this._onClickButton.bind(this)
  }

  _onClickButton (buttonName) {
    this.props.dispatch(actions.showMenu(buttonName))
  }

  render () {
    return (
      <nav className="sidebar">
        <SidebarButton name="Faction" icon={game} onClick={this._onClickButton}/>
        <SidebarButton name="Diplomacy" icon={stats} onClick={this._onClickButton}/>
        <SidebarButton name="Economy" icon={settings} onClick={this._onClickButton}/>
        <SidebarButton name="Production" icon={game} onClick={this._onClickButton}/>
        <SidebarButton name="Trade" icon={stats} onClick={this._onClickButton}/>
        <SidebarButton name="Tech" icon={settings} onClick={this._onClickButton}/>
      </nav>
    )
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state, router) =>
  Object.assign({}, state.sidebar, router)

export default connect(mapStateToProps)(Sidebar)
