import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptOne1ci extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>

        <p><strong>You:</strong> Tell him this is in regard to the email he asked me to send him on (date). That should jog his memory.</p>

        <hr/>

        <List>
          <ListItem
            primaryText="End of Script (Clicking this brings you to main menu)"
            containerElement={<Link to="/dashboard" />}
            />
        </List>
      </div>
    )
  }
}

export default ScriptOne1ci
