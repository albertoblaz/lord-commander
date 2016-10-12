import React from 'react'
import _ from 'lodash'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const actions = [
  <FlatButton
    label="Cancel"
    primary={true}
    onTouchTap={this.handleClose}
  />,
  <FlatButton
    label="Submit"
    primary={true}
    keyboardFocused={true}
    onTouchTap={this.handleClose}
  />,
]

const EasyEvent = (props) =>
  <Dialog
    title="Scrollable Dialog"
    actions={actions}
    modal={false}
    open={this.state.open}
    onRequestClose={this.handleClose}
    autoScrollBodyContent={true}
  >
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      {_.map(props.options, renderOption)}
    </RadioButtonGroup>
  </Dialog>

const renderOption = (options) =>
  <RadioButton
    key={i}
    value={`value${i + 1}`}
    label={`Option ${i + 1}`}
    style={styles.radioButton}
  />

export default EasyEvent
