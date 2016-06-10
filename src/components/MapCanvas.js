import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

class MapCanvas extends Component {
  render () {
    return <img src="http://cdn.citylab.com/media/img/citylab/legacy/2013/03/07/697px-Screenshot-playdiplomacy.jpg"/>
  }
}

MapCanvas.propTypes = {
  provinces: PropTypes.object.isRequired,
}

export default MapCanvas
