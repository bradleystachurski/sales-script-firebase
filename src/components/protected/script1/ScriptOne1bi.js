import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptOne1bi extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>

        <p><strong>You:</strong> You told him it’s (your full name), right?</p>
        <p><strong>Gatekeeper:</strong> Yes</p>
        <p><strong>You:</strong> Ok tell him I’m with Beeline, that should help.</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText="Puts you through (Clicking this brings you to main menu)"
            containerElement={<Link to="/dashboard" />}
          />
          <ListItem
            primaryText={
              <span><strong>Gatekeeper:</strong> I’m sorry, he doesn’t know Beeline, what’s this in reference to?</span>
            }
            containerElement={<Link to="/script1/1bii" />}
          />
        </List>
      </div>
    )
  }
}

export default ScriptOne1bi
