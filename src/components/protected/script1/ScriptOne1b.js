import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptOne1b extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>

        <p><strong>You:</strong> Who is this?</p>
        <p><strong>Gatekeeper:</strong> His assistant.</p>
        <p><strong>You:</strong> What's your name?</p>
        <p><strong>Gatekeeper:</strong> (Gatekeeper's Name)</p>
        <p><strong>You:</strong> Just tell him it's (your full name), please</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText="Puts you through to DM (Clicking this brings you back to main menu)"
            containerElement={<Link to="/dashboard" />}
          />
          <ListItem
            primaryText="He says he doesn't know you"
            containerElement={<Link to="/script1/1bi" />}
          />
        </List>
      </div>
    )
  }
}

export default ScriptOne1b
