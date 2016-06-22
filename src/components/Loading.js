import React, { PropTypes } from 'react'

import CircularProgress from 'material-ui/CircularProgress'

const Loading = () =>
  <div className="loading">
    <CircularProgress size={2} color={"#FF9800"} />
    <p className="loading__text">Loading</p>
  </div>

Loading.propTypes = {
  ready: PropTypes.bool,
}

export default Loading
