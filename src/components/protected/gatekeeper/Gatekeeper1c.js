import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper1c extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>

        <p><strong>You:</strong> We had a call scheduled today.</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText="Puts you through to DM (Clicking this brings you back to main menu)"
            containerElement={<Link to="/dashboard" />}
          />
          <ListItem
            primaryText="He doesn’t remember the call."
            containerElement={<Link to="/gatekeeper/1ci" />}
          />
        </List>
      </div>
    )
  }
}

export default Gatekeeper1c
